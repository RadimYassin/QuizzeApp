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
        $quiz->status =false;

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

        // // Extract relevant information for display
        // $data = $questions->map(function ($question) {
        //     return [
        //         'id' => $question->id,
        //         'time' => (int)$question->quiz->time,
        //         'title' => $question->title,
        //         'correct_option' => $question->correct_option,
        //         'options' => $question->options,
        //     ];
        // });

        // return response()->json($data, 200);

        $data = $questions->map(function ($question) {
            // Extract options information and return as objects
            $options = $question->options->map(function ($option) {
                return [
                    'id' => $option->id,
                    'question_id' => $option->question_id,
                    'optionA' => $option->optionA,
                    'optionB' => $option->optionB,
                    'optionC' => $option->optionC,
                    'optionD' => $option->optionD,
                    'created_at' => $option->created_at,
                    'updated_at' => $option->updated_at,
                ];
            });

            return [
                'id' => $question->id,
                'time' => (int)$question->quiz->time,
                'title' => $question->title,
                'correct_option' => $question->correct_option,
                'options' => $options,
            ];
        });

        // Convert the result to an array
        $result = $data->toArray();

        // Return the result
        return response()->json($result);
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
