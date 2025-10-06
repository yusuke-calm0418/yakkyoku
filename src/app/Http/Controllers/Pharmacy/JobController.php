<?php

namespace App\Http\Controllers\Pharmacy;

use App\Http\Controllers\Controller;
use App\Models\Job;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;
use Inertia\Inertia;

class JobController extends Controller
{
    // 自分の求人一覧
    public function index()
    {
        $pharmacy = Auth::user()->pharmacy;
        $jobs = $pharmacy->jobs()->latest()->paginate(20);

        return Inertia::render('Pharmacy/Jobs/Index', [
            'jobs' => $jobs,
        ]);
    }

    // 新規作成フォーム
    public function create()
    {
        return Inertia::render('Pharmacy/Jobs/Create');
    }

    // 保存
    public function store(StoreJobRequest $request)
    {
        $pharmacy = Auth::user()->pharmacy;
        $pharmacy->jobs()->create($request->validated());

        return redirect()->route('dashboard.jobs');
    }

    // 編集フォーム
    public function edit(Job $job)
    {
        $this->authorize('update', $job);
        return Inertia::render('Pharmacy/Jobs/Edit', [
            'job' => $job,
        ]);
    }

    // 更新
    public function update(UpdateJobRequest $request, Job $job)
    {
        $this->authorize('update', $job);
        $job->update($request->validated());

        return redirect()->route('dashboard.jobs');
    }

    // 削除
    public function destroy(Job $job)
    {
        $this->authorize('delete', $job);
        $job->delete();

        return redirect()->route('dashboard.jobs');
    }
}
