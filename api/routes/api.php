<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\TeacharController;
use Illuminate\Support\Facades\Route;


Route::get("/export", [\App\Http\Controllers\ExportAndImportController::class, "export"]);
Route::post("/import", [\App\Http\Controllers\ExportAndImportController::class, "import"]);

Route::post("/createUser", [AuthController::class, "createUser"]);
Route::post("/login", [AuthController::class, "loginUser"]);

//Quize ENDPOINTS


Route::resource("/user", AdminController::class);

 Route::resource("/Quiz", QuizController::class);
//endpont qestions
Route::post("/AddQestion", [QuestionController::class,"CreateQuestion" ]);
Route::delete("/deleteQestion/{id}", [QuestionController::class,"destroy" ]);


//quize for teacher
Route::get('/user/{userId}/quizzes', [TeacharController::class, "getQuizzesForUser"]);
