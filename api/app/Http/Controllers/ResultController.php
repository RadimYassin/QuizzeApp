<?php

// app/Http/Controllers/ResultController.php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ResultController extends Controller
{
    public function addResult(Request $request)
    {
        // Validate the request data

        $validateUser = Validator::make($request->all(),
        [
            'user_id' => 'required|exists:users,id',
            'quiz_id' => 'required|exists:quizzes,id',
            'score' => 'required|integer',



        ]);

        if($validateUser->fails()){
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateUser->errors()
            ], 203);
        }
        // Create a new result
        Result::create([
            'user_id' => $request->user_id,
            'quiz_id' => $request->quiz_id,
            'score' => $request->score,
        ]);

        // Optionally, you can return a response or redirect
        return response()->json(['message' => 'Result added successfully']);
    }

    public function viewUserScores($userId)
    {
        $userScores = DB::table('results')
            ->select('results.*', 'quizzes.title as quiz_title', 'quizzes.date as quiz_date', 'quizzes.time as quiz_time')
            ->join('quizzes', 'results.quiz_id', '=', 'quizzes.id')
            ->where('results.user_id', $userId)
            ->get();

        // Optionally, you can return the results or pass them to a view
        return response()->json($userScores);
    }

    public function viewResults()
    {
        // Retrieve all results
        $results = Result::all();

        // Optionally, you can return the results or pass them to a view
        return response()->json($results);
    }
}
