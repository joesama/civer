<?php
namespace App\Services;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

/**
 * Access Control & Menu Management.
 */
class Access
{
    /**
     * List all access granted for authenticate user.
     *
     * @return void
     */
    public function grantedToUser()
    {
        return Collection::make($this->generalMenu())
        ->merge($this->withAccess())
        ->toArray();
    }

    /**
     * get all access checked.
     *
     * @return Collection
     */
    public function withAccess(): Collection
    {
        return Collection::make($this->adminMenu())
        ->filter(function ($contain, $menu) {
            return Auth::check() ? Auth::user()->can($menu) : false;
        });
    }

    /**
     * Admin user menu.
     *
     * @return array
     */
    public function adminMenu(): array
    {
        return [
            'setting' => [
                'title' => __('menu.setting'),
                'sub' => [
                    'config' => [
                        'title' => __('menu.config'),
                        'path' => '/config'
                    ]
                    ],
                'icon' => 'user-cog',
            ]
        ];
    }

    /**
     * General menu without access control.
     *
     * @return array
     */
    public function generalMenu(): array
    {
        return [
            'home' => [
                'title' => __('menu.home'),
                'path' => '/home',
                'icon' => 'home',
            ],
        ];
    }

    /**
     * Menu to be display under profile.
     *
     * @return array
     */
    public function profileMenu(): array
    {
        return [
            'logout' => [
                'title' => __('menu.logout'),
                'path' => '/logout',
                'icon' => 'sign-out-alt',
                'method' => 'post'
            ]
        ];
    }
}
