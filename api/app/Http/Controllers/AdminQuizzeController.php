<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class AdminQuizzeController extends Controller
{

    public function SelectUsersWithQuizze()
    {
        $quizzesWithUsers = Quiz::with('createdBy')->get();

        return response()->json(['quizzesWithUsers' => $quizzesWithUsers], 200);

    }
    public function updateQuizStatus(Request $request, $id)
    {
        // Validate the request data as needed
        $request->validate([
            'status' => 'required|boolean',
        ]);

        // Find the quiz by ID
        $quiz = Quiz::find($id);


        // return response()->json(['message' => $quiz], 200);


        //Update the status
        $quiz->update(['status' => $request->input('status')]);


        return response()->json(['message' => 'Quiz status updated successfully'], 200);

 }

}
