<?php
namespace App\Services;

use Illuminate\Support\Collection;

/**
 * Access Control & Menu Management.
 */
class Access
{
    public function grantedTo($user)
    {
        return Collection::make($this->adminMenu())->filter(function ($menu) use ($user) {
            return true;
        })->toArray();
    }

    public function withAccess()
    {
    }

    public function adminMenu()
    {
        return [
            'home' => [
                'title' => __('menu.home'),
                'path' => '/home',
                'icon' => 'columns',
            ],
            'setting' => [
                'title' => __('menu.setting'),
                'sub' => [
                    'acl' => [
                        'title' => __('menu.acl'),
                        'path' => '/acl'
                    ],
                    'config' => [
                        'title' => __('menu.config'),
                        'path' => '/config'
                    ]
                    ],
                'icon' => 'user-cog',
            ]
        ];
    }

    public function profileMenu()
    {
        return [
            'logout' => [
                'title' => __('menu.logout'),
                'path' => '/logout'
            ]
        ];
    }
}
