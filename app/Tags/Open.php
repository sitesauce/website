<?php

namespace App\Tags;

use Carbon\Carbon;
use Statamic\Tags\Tags;
use Zttp\Zttp;

class Open extends Tags
{

    /**
     * The {{ open:mrr }} tag
     */
    public function mrr() : int
    {
        return $this->getStripeData()['mrr'];
    }

    /**
     * The {{ open:arr }} tag
     */
    public function arr() : int
    {
        return $this->mrr() * 12;
    }

    /**
     * The {{ open:costs }} tag
     */
    public function costs() : string
    {
        return number_format(40.5 - ((float) $this->vaporCost()), 2);
    }

    /**
     * The {{ open:aprofit }} tag
     */
    public function acosts() : string
    {
        return ((float) $this->costs()) * 12;
    }

    /**
     * The {{ open:profit }} tag
     */
    public function profit() : int
    {
        return $this->mrr() - $this->costs();
    }

    /**
     * The {{ open:aprofit }} tag
     */
    public function aprofit() : int
    {
        return $this->profit() * 12;
    }

    /**
     * The {{ open:customers }} tag
     */
    public function customers() : int
    {
        return $this->getStripeData()['customers'];
    }

    /**
     * The {{ open:trials }} tag
     */
    public function trials() : int
    {
        return $this->getStripeData()['trials'];
    }

    /**
     * The {{ open:users }} tag
     */
    public function users() : int
    {
        return $this->getSitesauceData()['users'];
    }

    /**
     * The {{ open:sites }} tag
     */
    public function sites() : int
    {
        return $this->getSitesauceData()['sites'];
    }

    /**
     * The {{ open:deployments }} tag
     */
    public function deployments() : int
    {
        return $this->getSitesauceData()['deployments'];
    }

    /**
     * The {{ open:leads }} tag
     */
    public function leads() : int
    {
        return $this->getSitesauceData()['leads'];
    }

    /**
     * The {{ open:timeAgo }} tag
     */
    public function timeAgo() : string
    {
        return '<time datetime="'.(Carbon::now()->timestamp * 1000).'"></time>';
    }

    /**
     * The {{ open:viewLabels }} tag
     */
    public function viewLabels() : string
    {
        return collect($this->getFathomData())->map(function ($day) {
            return ltrim(Carbon::parse($day['date'])->format('d').'th', '0');
        })->values()->toJson();
    }

    /**
     * The {{ open:viewVisits }} tag
     */
    public function viewVisits() : string
    {
        return collect($this->getFathomData())->map(function ($day) {
            return $day['pageviews'];
        })->values()->toJson();
    }

    /**
     * The {{ open:pageviews }} tag
     */
    public function pageviews() : string
    {
        return number_format(collect($this->getFathomData())->map(function ($day) {
            return $day['pageviews'];
        })->values()->sum(), 0, ',', '.');
    }

    /**
     * The {{ open:vaporCost }} tag
     */
    public function vaporCost() : string
    {
        return number_format($this->getVaporData()['estimatedCost'], 2);
    }
    
    protected function getStripeData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/stripe.json')), true);
        }

        return blink('stripe', fn () => Zttp::get('https://sitesauce-revenue.now.sh/api')->json());
    }

    protected function getFathomData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/fathom.json')), true);
        }

        return blink('fathom', fn () => Zttp::get('https://app.usefathom.com/sites/1025/charts?from='.urlencode(Carbon::today()->addMonths(-1)->toDateTimeString()).'&to='.urlencode(Carbon::today()->toDateTimeString()).'&tz=Europe/Madrid')->json());
    }

    protected function getSitesauceData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/sitesauce.json')), true);
        }

        return blink('sitesauce', fn () => Zttp::get('https://app.sitesauce.app/api/meta')->json());
    }

    protected function getVaporData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/vapor.json')), true);
        }

        return blink('vapor', fn () => Zttp::withHeaders(['Authorization' => 'Bearer '.config('services.vapor.token')])->get('https://vapor.laravel.com/api/projects/8900/environments/production/metrics?period=1M')->json());
    }
}
