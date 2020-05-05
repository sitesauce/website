<?php

namespace App\Policies;

use Statamic\Policies\EntryPolicy as Policy;

class EntryPolicy extends Policy
{
    public function view($user, $entry)
    {
        if ($entry->collectionHandle() === 'guides') {
            return $entry->get('author') === $user->id();
        }

        return parent::edit($user, $entry);
    }

    public function edit($user, $entry)
    {
        if ($entry->collectionHandle() === 'guides') {
            if ($entry->published() !== request()->input('published', $entry->published())) {
                return false;
            }

            return $entry->get('author') === $user->id();
        }

        return parent::edit($user, $entry);
    }
}
