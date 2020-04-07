<?php
namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class AccessControlController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/AccessControl', []);
    }

    public function save()
    {
    }
}
