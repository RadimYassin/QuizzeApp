<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestionResource;
use App\Models\Option;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Termwind\Helpers\QuestionHelper;

class QuestionController extends Controller
{

    public function index()
    {
    }

    /**
     * Store a newly created resource in storage.
     */

    public function CreateQuestion(Request $request)
    {

        //Validated
        $validateUser = Validator::make($request->all(),
            [
                'quiz_id' => 'required|exists:quizzes,id',
                'title' => 'required|string',
                'correct_option' => 'required|string|in:optionA,optionB,optionC,optionD',
                'optionA' => "required|string",
                'optionB' => "required|string",
                'optionC' => "required|string",
                'optionD' => "required|string",

            ]);

        if ($validateUser->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $validateUser->errors(),
            ], 203);
        }

        // Create the question
        $question = Question::create([
            'quiz_id' => $request->input('quiz_id'),
            'title' => $request->input('title'),
            'correct_option' => $request->input('correct_option'),
        ]);

        //  // Create options for the question

        $o = new Option();
        $o->question_id = $question->id;
        $o->optionA = $request->input('optionA');
        $o->optionB = $request->input('optionB');
        $o->optionC = $request->input('optionC');
        $o->optionD = $request->input('optionD');
        $o->save();
// $q=QuestionResource::collection($question);
        return response()->json(['message' => 'Question and options created successfully'], 201);
    }



    public function destroy($id)
    {
        $question = Question::find($id);

        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }
        $question->options()->delete();

        $question->delete();

        return response()->json(['message' => 'Question deleted successfully'], 200);
    }
}
