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
        $app = app();

        $memory = $app->make('orchestra.memory')->make();

        $locale = $app->getLocale();

        Inertia::share([
            'locale' => function () use ($locale) {
                return $locale;
            },
            'language' => function () use ($locale) {
                return translations($locale);
            },
            'nav' => function () {
                if (Auth::check()) {
                    return [
                        'user' => Auth::user()
                    ];
                } else {
                    return [
                        'user' => [
                            'fullname' => 'ALI'
                        ]
                    ];
                }
            },
            'site' => function () use ($memory) {
                return [
                        'name' => $memory->get('site.name', 'CIVER'),
                        'welcome' => 'general.welcome',
                        'logo' => asset($memory->get('site.logo.url')),
                        'login' => asset($memory->get('site.login.url'))
                    ];
            },
            'errors' => function () {
                return session()->get('errors') ?
                session()->get('errors')->getBag('default')->getMessages() :
                (object)[];
            }
        ]);
    }
}
