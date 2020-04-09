<?php
namespace App\Data\Models\Users;

use LdapRecord\Laravel\Auth\AuthenticatesWithLdap;
use LdapRecord\Laravel\Auth\HasLdapUser;
use LdapRecord\Laravel\Auth\LdapAuthenticatable;

class LdapUser extends User implements LdapAuthenticatable
{
    use AuthenticatesWithLdap, HasLdapUser;

    /**
     * The attribute field for ldap domain.
     *
     * @return string
     */
    public function getLdapDomainColumn(): string
    {
        return 'domain';
    }

    /**
     * The attribute field for guid domain.
     *
     * @return string
     */
    public function getLdapGuidColumn(): string
    {
        return 'guid';
    }
}
