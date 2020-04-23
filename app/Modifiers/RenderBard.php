<?php

namespace App\Modifiers;

use Statamic\Facades\Antlers;
use Statamic\Modifiers\Modifier;

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
    public function index($value)
    {
        return collect($value)->map(function ($block) {
            if ($block['type'] == 'paragraph') {
                return $this->index($block['content']);
            }
            
            return Antlers::parse(file_get_contents(view("partials.sets.{$block['type']}")->getPath()), $block);
        })->implode('');
    }
}
