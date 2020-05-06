<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Statamic\Contracts\Assets\Asset;
use Statamic\Facades\Image;
use Statamic\Imaging\GlideImageManipulator;

class GenerateImageJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /** @var \Statamic\Contracts\Assets\Asset */
    protected $asset;

    /** @var array */
    private $glideParams;

    public function __construct(Asset $asset, array $glideParams = [])
    {
        $this->asset = $asset;
        $this->glideParams = $glideParams;
    }

    public function handle(): string
    {
        $manipulator = $this->getManipulator($this->asset);

        foreach ($this->glideParams as $param => $value) {
            $manipulator->$param($value);
        }
        
        $manipulator->filename($this->getPath($manipulator));

        return $manipulator->build();
    }
    
    protected function getPath(GlideImageManipulator $manipulator)
    {
        return "{$this->asset->filename()}x{$manipulator->getParams()['w']}.{$this->asset->extension()}";
    }

    private function getManipulator(Asset $asset): GlideImageManipulator
    {
        return Image::manipulate($asset);
    }
}
