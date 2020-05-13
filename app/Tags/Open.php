<?php

namespace App\Tags;

use Carbon\Carbon;
use Illuminate\Support\Facades\Http;
use Statamic\Tags\Tags;
use Zttp\Zttp;

class Open extends Tags
{

    /**
     * The {{ open:mrr }} tag
     */
    public function mrr($format = true) : string
    {
        return $this->formatCurrency($this->getBaremetricsData()['mrr'] / 100, $format);
    }

    /**
     * The {{ open:arr }} tag
     */
    public function arr($format = true) : string
    {
        return $this->formatCurrency($this->getBaremetricsData()['arr'] / 100, $format);
    }

    /**
     * The {{ open:costs }} tag
     */
    public function costs($format = true) : string
    {
        return $this->formatCurrency(40.5 - $this->vaporCost(false), $format);
    }

    /**
     * The {{ open:aprofit }} tag
     */
    public function acosts($format = true) : string
    {
        return $this->formatCurrency($this->costs(false) * 12, $format);
    }

    /**
     * The {{ open:profit }} tag
     */
    public function profit($format = true) : string
    {
        return $this->formatCurrency($this->mrr(false) - $this->costs(false), $format);
    }

    /**
     * The {{ open:aprofit }} tag
     */
    public function aprofit($format = true) : string
    {
        return $this->formatCurrency($this->arr(false) - $this->acosts(false), $format);
    }

    /**
     * The {{ open:customers }} tag
     */
    public function customers() : int
    {
        return $this->getBaremetricsData()['active_subscriptions'];
    }

    /**
     * The {{ open:trials }} tag
     */
    public function trials() : int
    {
        return $this->getBaremetricsData()['active_trials'];
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
    public function vaporCost($format = true) : string
    {
        return $this->formatCurrency($this->getVaporData()['estimatedCost'], $format);
    }
    
    protected function formatCurrency(float $amount, bool $shouldFormat)
    {
        return $shouldFormat ? number_format($amount, floor($amount) == $amount ? '0':'2') : $amount;
    }
    
    protected function getBaremetricsData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/baremetrics.json')), true);
        }

        return blink('baremetrics', fn () => collect(Http::withToken(config('services.baremetrics.token'))->get(sprintf('https://api.baremetrics.com/v1/metrics?start_date=%s&end_date=%s', now()->yesterday()->toDateString(), now()->toDateString()))->json()['metrics'])->first(fn ($metric) => $metric['mrr'] != 0));
    }

    protected function getFathomData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/fathom.json')), true);
        }

        return blink('fathom', fn () => Http::get('https://app.usefathom.com/sites/1025/charts?from='.urlencode(Carbon::today()->addMonths(-1)->toDateTimeString()).'&to='.urlencode(Carbon::today()->toDateTimeString()).'&tz=Europe/Madrid')->json());
    }

    protected function getSitesauceData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/sitesauce.json')), true);
        }

        return blink('sitesauce', fn () => Http::get('https://app.sitesauce.app/api/meta')->json());
    }

    protected function getVaporData() : array
    {
        if (! app()->isProduction()) {
            return json_decode(file_get_contents(storage_path('app/stubs/vapor.json')), true);
        }

        return blink('vapor', fn () => Http::withToken(config('services.vapor.token'))->get('https://vapor.laravel.com/api/projects/8900/environments/production/metrics?period=1M')->json());
    }
}
