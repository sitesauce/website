<?php

namespace App\Tags;

use Statamic\Tags\Tags;

class Og extends Tags
{

    /**
     * The {{ og:image }} tag
     */
    public function image() : string
    {
        return sprintf('https://images.sitesauce.app/**%s**.png?md=1&theme=%s', rawurlencode($this->params->get('title')), $this->params->get('theme', 'brand'));
    }
}
