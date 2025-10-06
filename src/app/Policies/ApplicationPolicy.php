<?php

namespace App\Policies;

use App\Models\Application;
use App\Models\Job;
use App\Models\User;

class ApplicationPolicy
{
    // 応募一覧の閲覧はジョブ所有薬局のみ
    public function viewAny(User $user, Job $job): bool
    {
        return $user->pharmacy && $user->pharmacy->id === $job->pharmacy_id;
    }

    // 承認/却下も同様
    public function update(User $user, Application $application): bool
    {
        return $user->pharmacy && $user->pharmacy->id === $application->job->pharmacy_id;
    }
}
