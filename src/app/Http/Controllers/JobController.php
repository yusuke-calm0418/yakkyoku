<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobController extends Controller
{
    // 求人一覧（pref, date_fromで絞り込み、20件ページネーション）
    public function index(Request $request)
    {
        $query = Job::with('pharmacy');

        if ($request->filled('pref')) {
            $query->where('pref', $request->input('pref'));
        }
        if ($request->filled('date_from')) {
            $query->where('start_date', '>=', $request->input('date_from'));
        }

        $jobs = $query->published()->paginate(20);

        return Inertia::render('Jobs/Index', [
            'jobs' => $jobs,
            'filters' => $request->only(['pref', 'date_from']),
        ]);
    }

    // 求人詳細
    public function show(Job $job)
    {
        $job->load('pharmacy');
        return Inertia::render('Jobs/Show', [
            'job' => $job,
        ]);
    }
}
