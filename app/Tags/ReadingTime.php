<?php

namespace App\Tags;

use Statamic\Modifiers\CoreModifiers;
use Statamic\Tags\Tags;

class ReadingTime extends Tags
{

    /**
     * The {{ reading_time }} tag
     */
    public function index() : string
    {
		$content = collect($this->params->get('content'))->map(function($item) {
			return view("partials.sets.{$item['type']}", $item)->render();
		})->implode('');

		return app(CoreModifiers::class)->readTime($content, []);
    }
}
