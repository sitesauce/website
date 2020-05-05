<?php

namespace App\Providers;

use App\Protect\SitesauceDriver;
use Illuminate\Support\Facades\Gate;
use Statamic\Auth\Protect\ProtectorManager;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        //'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        app(ProtectorManager::class)->extend('sitesauce', function ($app) {
            return new SitesauceDriver;
        });
        
        Gate::policy(
            \Statamic\Contracts\Entries\Entry::class,
            \App\Policies\EntryPolicy::class
        );
    }
}
