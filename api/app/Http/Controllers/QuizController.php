<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuizController extends Controller
{

    public function index()
    {
        $Quizs = Quiz::all();
        return response()->json([
            'status' => true,
            'Quizs' => $Quizs,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $validatedData = $request->validate([
        //     'title' => 'required|string|max:255',
        // ]);
        $validatedData = Validator::make($request->all(),
            [
                'title' => 'required|string|max:255',
                "date" => "'required'",
                "time" => "required",
                "created_by" => "required",
            ]);

        // if ($validatedData->fails()) {
        //     return response()->json([
        //         'status' => false,
        //         'message' => 'validation error',
        //         'errors' => $validatedData->errors(),
        //     ], 203);
        // }
        $quiz = new Quiz();
        $quiz->title = $request->title;
        $quiz->date = $request->date;
        $quiz->time = $request->time;
        $quiz->created_by = $request->created_by;

        $quiz->save();

        return response()->json([
            'status' => true,
            'Quizs' => $quiz,
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $questions = Question::with('options')
            ->where('quiz_id', $id)
            ->get();

        // Extract relevant information for display
        $data = $questions->map(function ($question) {
            return [
                'id' => $question->id,
                'quiz_id' => $question->quiz_id,
                'title' => $question->title,
                'correct_option' => $question->correct_option,
                'options' => $question->options,
            ];
        });

        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {

        $QuizSearch = Quiz::find($id);

        if ($QuizSearch) {
            $QuizSearch->delete();
            return response()->json([
                'status' => true,
                'message' => 'Quiz deleted',
            ], 200);} else {
            return response()->json([
                'status' => true,
                'message' => ' not found ',
            ], 201);}

    }

}
