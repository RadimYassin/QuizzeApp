<?php

namespace App\Imports;

use App\Models\User;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Hash;

class UsersImport implements ToCollection, WithHeadingRow
{
    protected $importedUsers = [];
    protected $existingUsers = [];

    /**
    * @param \Illuminate\Support\Collection $rows
    */
    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
            // Check if the user with the same email already exists
            $existingUser = User::where('email', $row['email'])->first();

            if ($existingUser) {
                // Store existing users in the array
                $this->existingUsers[] = $existingUser;
            } else {
                // Create a new user if not already exists
                $user = User::create([
                    "firstname" => $row["firstname"],
                    "lastname" => $row["lastname"],
                    "email" => $row["email"],
                    "password" =>Hash::make($row["password"]),
                    "type" => $row["type"],
                    "groupe" => $row["groupe"],
                ]);

                // Store the imported user in the array
                $this->importedUsers[] = $user;
            }
        }
    }

    /**
     * Get the array of imported users.
     *
     * @return array
     */
    public function getImportedUsers()
    {
        return $this->importedUsers;
    }

    /**
     * Get the array of existing users.
     *
     * @return array
     */
    public function getExistingUsers()
    {
        return $this->existingUsers;
    }
}
