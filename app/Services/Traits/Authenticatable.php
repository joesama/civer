<?php
namespace App\Services\Traits;

use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use LdapRecord\Models\OpenLDAP\User;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

trait Authenticatable
{
    use AuthenticatesUsers, ThrottlesLogins;

    /**
     * Login user.
     *
     * @param Request $request
     *
     * @return void
     */
    public function login(Request $request)
    {
        $credentials = $this->getCredential($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->guard()->attempt($credentials, $request->filled('remember'))) {
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Validate & return credential use for authentication.
     *
     * @param Request $request
     *
     * @return array
     */
    protected function getCredential(Request $request): array
    {
        $credentials = [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ];

        $request->validate($credentials);

        return [
            $this->loginField() => $request->get($this->username()),
            'password' => $request->get('password')
        ];
    }

    /**
     * Get the login username to be used by the authenticator.
     *
     * @return string
     */
    public function username()
    {
        return 'username';
    }

    /**
     * Get login field used.
     *
     * @return string
     */
    protected function loginField(): string
    {
        return config('civer.username');
    }
}
