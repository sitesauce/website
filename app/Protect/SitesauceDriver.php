<?php

namespace App\Protect;

use Statamic\Auth\Protect\Protectors\Protector;

class SitesauceDriver extends Protector
{
	public function protect()
    {
		if ($this->isLocal() || $this->isSitesauce() || $this->isLoggedIn()) {
			return;
		}

        abort(redirect('https://sitesauce.app'));
	}
	
	protected function isLocal()
	{
		return !app()->isProduction();
	}

	protected function isSitesauce()
	{
		return str_contains(request()->header('User-Agent'), 'Sitesauce');
	}

	protected function isLoggedIn()
	{
		return auth()->check();
	}
}