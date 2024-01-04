<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $users = User::all();
        return response()->json([
            'status' => true,
            'message' => ' selected Successfully',
            'users' => $users,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $data = User::find($user);
        if ($data) {
            return response()->json([
                "success" => true,
                "message" => "User selected.",
                "data" => $data,
            ], 200);
        }

        // Handle case where user is not found
        return response()->json([
            "success" => false,
            "message" => "User not found.",
        ], 404);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $input = $request->all();

        $validator = Validator::make($input, [

            'email' => 'regex:/^[\w\._\+-]+@emsi\.ma$/|email',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validator->errors(),
            ], 203);
        }


        if ($request->has('firstname') && !empty($request->input('firstname'))) {
            $user->firstname = $input['firstname'];
        }


        if ($request->has('lastname') && !empty($request->input('lastname'))) {
            $user->lastname = $input['lastname'];
        }
        if ($request->has('email') && !empty($request->input('email')) ) {
            $user->email = $input['email'];
        }
        if ($request->has('type') && !empty($request->input('type'))) {
            $user->type = $input['type'];
        }
        if ($request->has('groupe') && !empty($request->input('groupe'))) {
            $user->groupe = $input['groupe'];
        }



        if ($request->has('password') && !empty($request->input('password'))) {
            $user->password = Hash::make($input['password']);
        }


        if ($user->isDirty()) { // Check if any fields were actually changed
            $user->save();
        }

        return response()->json([
            "success" => true,
            "message" => "user updated successfully.",
            "data" => $user,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $userSearch = User::find($id);

        if ($userSearch) {
            $userSearch->delete();
            return response()->json([
                'status' => true,
                'message' => ' item deleted ',
            ], 200);} else {
            return response()->json([
                'status' => true,
                'message' => ' not found ',
            ], 201);}

    }

}
