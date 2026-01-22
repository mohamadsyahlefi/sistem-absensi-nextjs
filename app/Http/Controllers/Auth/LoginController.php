<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Sanctum;

class LoginController extends Controller
{
    public function store(Request $request)
    {
         // Logic for handling user login
         $login = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6'
         ]);

         // proses login
         if (Auth::attempt($login, $request->remember)) {
            $request->session()->regenerate();

            return redirect()->intended('/admin')->with('success', 'Login berhasil!');
         }

         // jika login gagal
            return back()->with('error', 'Login gagal! Silakan periksa kembali email dan password Anda.')->withInput();

    }
    
    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('success', 'Anda telah logout!');
    }
}
