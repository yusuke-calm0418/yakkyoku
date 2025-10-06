<?php

namespace App\Policies;

use App\Models\Job;
use App\Models\User;

class JobPolicy
{
    // update/deleteは「auth()->user()->pharmacy->id === job.pharmacy_id」のみ許可
    public function update(User $user, Job $job): bool
    {
        return $user->pharmacy && $user->pharmacy->id === $job->pharmacy_id;
    }

    public function delete(User $user, Job $job): bool
    {
        return $user->pharmacy && $user->pharmacy->id === $job->pharmacy_id;
    }
}
