<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Models\User;
use Illuminate\Http\Request;

class TeacharController extends Controller
{

    public function getQuizzesForUser($userId)
    {
        // Find the user by ID
        $user = User::find($userId);

        // Check if the user exists
        if ($user) {
            // Retrieve quizzes for the user using the relationship
            $quizzes = $user->quizzes;

            // Transform the collection of quizzes using the resource
            $quizzesResource = QuizResource::collection($quizzes);

            // Return the transformed data as JSON
            return response()->json(['quizzes' => $quizzesResource], 200);
        } else {
            // User not found
            return response()->json(['message' => 'User not found'], 404);
        }
    }


}
