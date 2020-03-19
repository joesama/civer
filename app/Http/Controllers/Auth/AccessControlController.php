<?php
namespace App\Http\Controllers\Auth;

use Inertia\Inertia;

class AccessControlController
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Inertia::render('Auth/AccessControl', []);
    }

    public function save()
    {
    }
}
