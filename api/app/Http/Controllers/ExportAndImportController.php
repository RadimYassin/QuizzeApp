<?php

namespace App\Http\Controllers;

use App\Imports\UsersImport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;

class ExportAndImportController extends Controller
{


    public function import(Request $request)
    {
       $validatedData = $request->validate([
    'file' => 'required|file|max:2048|mimes:xlsx,xls',
]);

$import = new UsersImport;
Excel::import($import, $request->file('file'));

// Get the imported users and existing users from the UsersImport class
$importedUsers = $import->getImportedUsers();
$existingUsers = $import->getExistingUsers();


$Imported=[];
$Existing=[];

if (!empty($importedUsers)) {
    $Imported['imported_users'] = $importedUsers;

}

if (!empty($existingUsers)) {
    $Existing['Existing_users'] = $existingUsers;
    // $Existing['message'] = 'Some users already exist in the database. Please review the existing users.';

    // return response()->json($existingUsers);

}

return response()->json([
    "status" => true,
   $Existing,
   $Imported
], 200);



    }

    public function export()
    {
        return Excel::download(new \App\Exports\UsersExport, 'users.xlsx');

    }
}
