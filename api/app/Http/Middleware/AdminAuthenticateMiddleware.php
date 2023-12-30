<?php


namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticateMiddleware
{

        public function handle(Request $request, Closure $next)
        {
            // Check if the request has a valid token
            if (!$request->bearerToken()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized. Token not provided.',
                ], 401);
            }

            // Attempt to authenticate the user using the token
            if (!Auth::guard('sanctum')->check()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Unauthorized. Invalid token.',
                ], 401);
            }

            // Check if the authenticated user has the required type
            if ($request->user()->type === 'admin') {
                return $next($request);
            }

            // If not, return a response indicating unauthorized access
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized. Admin access required.',
            ], 403);
        }
}
