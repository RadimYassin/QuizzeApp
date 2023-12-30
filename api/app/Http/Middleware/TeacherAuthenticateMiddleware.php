<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class TeacherAuthenticateMiddleware
{
    public function handle($request, Closure $next)
    {
        // Check if the user is authenticated and is a teacher
        if (Auth::check() && Auth::user()->type === 'teacher') {
            return $next($request);
        }

        // If not authenticated or not a teacher, return an unauthorized response
        return response()->json(['error' => 'Unauthorized for teachers'], 401);
    }
}
