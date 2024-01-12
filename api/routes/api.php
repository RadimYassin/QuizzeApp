<?php

use App\Http\Controllers\AdminQuizzeController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacharController;
use Illuminate\Support\Facades\Route;




Route::get("/export", [\App\Http\Controllers\ExportAndImportController::class, "export"]);
Route::post("/import", [\App\Http\Controllers\ExportAndImportController::class, "import"]);

Route::post("/createUser", [AuthController::class, "createUser"]);
Route::post("/login", [AuthController::class, "loginUser"]);

//Quize ENDPOINTS
//quizzes
Route::get('/availableQuizzes', [StudentController::class, 'index']);
Route::post('/add-result', [ResultController::class, 'addResult']);
Route::get('/view-results', [ResultController::class, 'viewResults']);
Route::get('/view-user-scores/{userId}', [ResultController::class, 'viewUserScores']);

Route::resource("/user", AdminUserController::class);
Route::get("/userWithquizze",[AdminQuizzeController::class,"SelectUsersWithQuizze"]);
Route::put('/quizzes/{id}/updateStatus', [AdminQuizzeController::class, 'updateQuizStatus']);


 Route::resource("/Quiz", QuizController::class);
//endpont qestions
Route::post("/AddQestion", [QuestionController::class,"CreateQuestion" ]);
Route::delete("/deleteQestion/{id}", [QuestionController::class,"destroy" ]);


//quize for teacher
Route::get('/user/{userId}/quizzes', [TeacharController::class, "getQuizzesForUser"]);
