<?php
namespace App\Data\Models;

use App\Data\Models\Users\User;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * The users that belong to the role.
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
