<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Statamic\View\View;

class RenderBard extends Modifier
{
    /**
     * Modify a value
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        return collect($value)->map(function ($block) {
			return view("partials.sets.{$block['type']}", $block)->render();
		})->implode('');
    }
}
