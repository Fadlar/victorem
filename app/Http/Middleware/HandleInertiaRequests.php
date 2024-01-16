<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $carts_global_count = $request->user() ? Cache::rememberForever('carts_global_count', fn () => Cart::where('user_id', $request->user()->id)->count()) : null;

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'language' => fn () => [
                'list' => translations(base_path('lang/' . app()->getLocale() . '.json')),
                'current' => app()->getLocale()
            ],
            'carts_global_count' => $carts_global_count
        ];
    }
}
