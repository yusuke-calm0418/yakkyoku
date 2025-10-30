import React from 'react';
import { router } from '@inertiajs/react';

export default function PharmacyJobsIndex({ jobs }) {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">自分の求人一覧</h1>
      <a href="/dashboard/jobs/create" className="bg-green-500 text-white px-4 py-2 rounded mb-4 inline-block">新規作成</a>
      <div className="space-y-4">
        {jobs.data.map(job => (
          <div key={job.id} className="border rounded p-4 flex flex-col gap-2">
            <div className="font-bold text-lg">{job.title}</div>
            <div>期間: {job.start_date} ～ {job.end_date || '未定'}</div>
            <div>時給: {job.hourly_rate ? `${job.hourly_rate}円` : '応相談'}</div>
            <div>都道府県: {job.pref || '指定なし'}</div>
            <div className="flex gap-2 mt-2">
              <a href={`/dashboard/jobs/${job.id}/edit`} className="text-blue-600 underline">編集</a>
              <a href={`/dashboard/jobs/${job.id}/applications`} className="text-green-600 underline">応募者を見る</a>
              <button
                className="text-red-600 underline"
                onClick={() => {
                  if (confirm('本当に削除しますか？')) {
                    router.delete(`/dashboard/jobs/${job.id}`);
                  }
                }}
              >削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
