<?php

namespace App\Providers;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        $memory = $this->app->make('orchestra.memory')->make();
        
        Collection::make($memory->get('menu'))->each(function ($contains, $menu) {
            Gate::define($menu, function ($user) use ($contains) {
                return in_array($user->id, $contains['user']);
            });

            if (Arr::has($contains, 'sub')) {
                Collection::make($contains['sub'])->each(function ($sub, $submenu) {
                    Gate::define($submenu, function ($user) use ($sub) {
                        return in_array($user->id, $sub['user']);
                    });
                });
            }

        });
    }
}
