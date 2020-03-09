<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share([
            'locale' => function () {
                return app()->getLocale();
            },
            'language' => function () {
                return translations(app()->getLocale());
            },
            'nav' => function () {
                if (Auth::check()) {
                    return [
                        'user' => Auth::user()
                    ];
                } else {
                    return null;
                }
            },
            'site' => function () {
                return [
                        'name' => 'CIVER',
                        'welcome' => 'general.welcome',
                        'logo' => '/images/CIVER.png'
                    ];
            }
        ]);
    }
}
