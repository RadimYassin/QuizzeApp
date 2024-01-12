<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Models\Quiz;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $quizzes =QuizResource::collection(Quiz::where('status', 1)->get());
        return response()->json($quizzes, 200);
    }


}
