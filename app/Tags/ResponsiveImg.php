<?php

namespace App\Tags;

use Spatie\ResponsiveImages\Responsive;
use Statamic\Tags\Tags;

class ResponsiveImg extends Tags
{
    /**
     * The {{ responsive_img }} tag.
     *
     * @return string|array
     */
    public function index()
    {
        return tap(app(Responsive::class), function (Responsive $tag) {
            $tag->tag = 'responsive:responsive_src';
            
            $tag->setParser($this->parser)->setContext($this->context->merge(['responsive_src' => $this->getParam('src')]))->setParameters($this->params);
        })->__call('some', []);
    }
}
