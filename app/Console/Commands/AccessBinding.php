<?php

namespace App\Console\Commands;

use email;
use Carbon\Carbon;
use App\Services\Access;
use App\Data\Models\Roles;
use Illuminate\Support\Str;
use App\Data\Models\Users\User;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Orchestra\Support\Facades\Memory;

class AccessBinding extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'civer:access';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Bind access to user';

    /**
     * Data memory.
     *
     * @var Memory
     */
    protected $memory;

    /**
     * User Model.
     *
     * @var User
     */
    protected $user;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $this->output->newLine();
        
        $this->alert('CIVer Access Binding');

        $this->memory = Memory::make();

        $this->line('Registering application administer user...');
        
        $this->user = $this->getAdminUser();

        $this->output->newLine();

        $this->line('Bind application administer user role...');

        $adminId = $this->bindAdminRole();

        $this->output->newLine();

        $this->line('Attach application administer access...');

        $this->bindNavigation($adminId);

        $this->output->newLine();

        $this->line('CIVer Access Binding Complete!!!');

        $this->output->newLine();
    }

    protected function bindAdminRole(): int
    {
        $adminRole = $this->attachedRole('administrator', true);

        $adminRole->users()->sync([
            $this->user->id => ['updated_at' => Carbon::now()]
        ]);

        return $adminRole->id;
    }

    protected function bindNavigation(int $adminId)
    {
        $access = app(Access::class);

        $menu = Collection::make($access->adminMenu())
        ->each(function ($data, $nav) use ($adminId) {
            $this->memory->set(
                'menu.' . $nav,
                [
                    'user' => [$this->user->id],
                    'role' => [$adminId]
                ]
            );

            Collection::make($data['sub'])
            ->each(function ($data, $sub) use ($nav, $adminId) {
                $this->memory->set(
                    'menu.' . $nav .'.sub.' . $sub,
                    [
                        'user' => [$this->user->id],
                        'role' => [$adminId]
                    ]
                );
            });
        });

        
        // dd($this->memory->get('menu'));
    }

    protected function attachedRole(string $name, bool $admin = false, string $description = null)
    {
        return Roles::updateOrCreate(
            [
                'name' => Str::title($name)
            ],
            [
                'is_admin' => $admin,
                'description' => Str::title($description ?? $name . ' Role')
            ]
        );
    }

    /**
     * Get admin user for application.
     *
     * @return void
     */
    private function getAdminUser()
    {
        return User::where(
            'email',
            $this->memory->get('site.email')
        )->first();
    }
}
