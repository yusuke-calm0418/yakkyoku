<?php

namespace App\Http\Controllers\Pharmacy;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\Job;
use App\Models\Application;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    use AuthorizesRequests;

    // 応募一覧
    public function index(Job $job)
    {
        $this->authorize('viewAny', [Application::class, $job]);
        $applications = $job->applications()->with('pharmacist.user')->get();

        return inertia('Pharmacy/Applications/Index', [
            'job' => $job,
            'applications' => $applications,
        ]);
    }

    // 承認
    public function approve(Application $application)
    {
        $this->authorize('update', $application);
        $application->update(['status' => 'approved']);
        // 通知処理は後で追加
        return back()->with('success', '承認しました');
    }

    // 却下
    public function reject(Application $application)
    {
        $this->authorize('update', $application);
        $application->update(['status' => 'rejected']);
        // 通知処理は後で追加
        return back()->with('success', '却下しました');
    }
}
