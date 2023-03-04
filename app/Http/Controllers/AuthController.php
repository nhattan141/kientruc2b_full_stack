<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        /** @var App\Models\User */
        $data = $request->validated();

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        // chuc nang ghi nho tai khoan
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        };

        //lay thong tin user va tao token
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout(Request $request)
    {
        /** @var App\Models\User */
        $user = Auth::user();

        //xoa token hien tai cua user
        $user->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);
    }

    public function admin(Request $request)
    {
        return $request->user();
    }
}
