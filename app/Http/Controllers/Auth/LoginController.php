<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Hash;


class LoginController extends Controller
{
   public function store(Request $request)
    {
         $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
         ]);

         if (Auth::attempt($credentials)) {
            return response()->json([
               'message' => 'Login berhasil!',  
            ], 200);
         } else {
            return response()->json([
               'message' => 'Login gagal! Silakan periksa kembali email dan password Anda.',  
            ], 401);
         }

         $user = Auth::user();

         return response()->json([
            'user' => $user,
            'token' => $user->createToken('auth_token')->plainTextToken,
         ]);
    }
    
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('success', 'Anda telah logout!');
    }
}
