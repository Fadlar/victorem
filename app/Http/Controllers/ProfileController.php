<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request)
    {
        if ($request->user()->hasAnyRole('admin') || $request->user()->hasAnyRole('owner')) {
            return Inertia::render('Profile/Edit', [
                'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
                'status' => session('status'),
            ]);
        }

        return view('profile.index');
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request)
    {
        $request->user()->fill($request->validated());

        $request->validate([
            'avatar' => ['nullable', 'image', 'mimes:png,jpg,jpeg', 'max:2048']
        ]);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($request->file('avatar')) {
            if ($request->user()->userDetail->avatar !== null) {
                Storage::delete($request->user()->userDetail->avatar);
            }

            $avatar = $request->file('avatar');
            $avatar = $avatar->store('user-avatar', 'public');
            $request->user()->userDetail()->updateOrCreate([
                'user_id' => $request->user()->id
            ], [
                'avatar' => $avatar
            ]);
        }

        $request->user()->userDetail()->updateOrCreate(
            [
                'user_id' => $request->user()->id
            ],
            [
                'address' => $request->address,
                'phone_number' => $request->phone_number,
                'birthplace' => $request->birthplace,
                'birthdate' => $request->birthdate,
                'gender' => $request->gender
            ]
        );

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
