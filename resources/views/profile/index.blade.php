@extends('layouts.app')
@section('content')
    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Account Information</h4>
                        <div class="breadcrumb__links">
                            <a href="/">Home</a>
                            <span>Account Information</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->
    <section class="py-5">
        <div class="container">
            <div class="border-bottom mb-4">
                <h5 style="font-weight: 600">Profile Information</h5>
                <p class="text-secondary" style="font-size: small">
                    Update your account's profile information.
                </p>
            </div>
            <form action="{{ route('profile.update') }}" method="POST">
                @csrf
                @method('patch')
                <div class="row">
                    <div class="col-12 col-md-6 mb-3">
                        <label for="name">Name <span class="text-danger">*</span></label>
                        <input type="text" name="name" value="{{ $user->name ?? old('name') }}" class="form-control" placeholder="Enter your name." required />
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="email">Email <span class="text-danger">*</span></label>
                        <input type="email" class="form-control" value="{{ $user->email }}" placeholder="Enter your email." disabled />
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="phone_number">Phone <span class="text-danger">*</span></label>
                        <input type="tel" name="phone_number" value="{{ $user->userDetail?->phone_number ?? old('phone_number') }}" class="form-control" placeholder="Enter your phone number." required />
                    </div>
                    <div class="col-12 col-md-6 mb-3"></div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="address">Address <span class="text-danger">*</span></label>
                        <textarea name="address" class="form-control" placeholder="Enter your address." required>{{ $user->userDetail?->address ?? old('phone_number') }}</textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="primary-btn btn-sm border-0">Update profile</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <hr>
    <section class="py-5">
        <div class="container">
            <div class="border-bottom mb-4">
                <h5 style="font-weight: 600">Update Password</h5>
                <p class="text-secondary" style="font-size: small">
                    Ensure your account using a long, random password to stay secure.
                </p>
            </div>
            <form action="{{ route('password.update') }}" method="POST">
                @csrf
                @method('put')
                <div class="row">
                    <div class="col-12 col-md-6 mb-3">
                        <label for="current_password">Current Password</label>
                        <input type="password" name="current_password" class="form-control" placeholder="Enter your current password." required />
                        @error('current_password')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-12 col-md-6"></div>

                    <div class="col-12 col-md-6 mb-3">
                        <label for="password">New Password</label>
                        <input type="password" name="password" class="form-control" placeholder="Enter your new password." required />
                        @error('password')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="col-12 col-md-6"></div>

                    <div class="col-12 col-md-6 mb-3">
                        <label for="password_confirmation">Password Confirmation</label>
                        <input type="password" name="password_confirmation" class="form-control" placeholder="Enter your password confirmation." required />
                    </div>
                    <div class="col-12 col-md-6"></div>

                    <div class="col-12">
                        <button type="submit" class="primary-btn btn-sm border-0">Update password</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
@endsection
