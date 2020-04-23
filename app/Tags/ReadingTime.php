<?php

namespace App\Tags;

use App\Modifiers\RenderBard;
use Statamic\Modifiers\CoreModifiers;
use Statamic\Tags\Tags;

class ReadingTime extends Tags
{

    /**
     * The {{ reading_time }} tag
     */
    public function index() : string
    {
        $content = (new RenderBard)->index($this->params->get('content'));

        return app(CoreModifiers::class)->readTime($content, []);
    }
}
