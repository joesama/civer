<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Centralise Identity Verification  Configuration
    |--------------------------------------------------------------------------
    |
    | Here to define configuration selected for indentity verification.
    |
    */

    /*
    | Authentication guard used for identity verification.
    |
    | Selection available : user, openldap, openldap-db, ad, ad-db
    |
    | Supported: "openldap", "active directory"
    |
    */
    'guard' => env('CIVER_GUARD', 'user'),

    /*
    | Field Used For Authentication.
    |
    | Selection available : samaaccount, uid
    */
    'username' => env('CIVER_USERNAME', 'uid'),

];
