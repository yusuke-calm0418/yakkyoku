import React from 'react';
import { router } from '@inertiajs/react';

export default function JobsIndex({ jobs, filters }) {
  const [pref, setPref] = React.useState(filters.pref || '');
  const [dateFrom, setDateFrom] = React.useState(filters.date_from || '');

  const handleFilter = (e) => {
    e.preventDefault();
    router.get('/jobs', { pref, date_from: dateFrom });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">求人一覧</h1>
      <form onSubmit={handleFilter} className="mb-4 flex gap-2 flex-wrap">
        <input
          type="text"
          placeholder="都道府県"
          value={pref}
          onChange={e => setPref(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <input
          type="date"
          value={dateFrom}
          onChange={e => setDateFrom(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">検索</button>
      </form>
      <div className="space-y-4">
        {jobs.data.map(job => (
          <div key={job.id} className="border rounded p-4 flex flex-col gap-2">
            <div className="font-bold text-lg">{job.title}</div>
            <div>薬局: {job.pharmacy?.name}</div>
            <div>期間: {job.start_date} ～ {job.end_date || '未定'}</div>
            <div>時給: {job.hourly_rate ? `${job.hourly_rate}円` : '応相談'}</div>
            <div>都道府県: {job.pref || '指定なし'}</div>
            <a href={`/jobs/${job.id}`} className="text-blue-600 underline">詳細を見る</a>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        {jobs.links && jobs.links.map((link, i) => (
          <button
            key={i}
            disabled={!link.url}
            onClick={() => link.url && Inertia.visit(link.url)}
            className={`px-2 py-1 rounded ${link.active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}
