import React from 'react';
import { router } from '@inertiajs/react';

export default function JobsShow({ job, auth }) {
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState('');
  const isPharmacist = auth?.user?.roles?.includes('pharmacist');

  const handleApply = (e) => {
    e.preventDefault();
    setError('');
    router.post(`/jobs/${job.id}/apply`, { message }, {
      onError: (errors) => {
        setError(errors.message || '応募に失敗しました');
      },
      onSuccess: () => {
        setMessage('応募が完了しました');
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <div className="mb-2">薬局: {job.pharmacy?.name}</div>
      <div className="mb-2">期間: {job.start_date} ～ {job.end_date || '未定'}</div>
      <div className="mb-2">時給: {job.hourly_rate ? `${job.hourly_rate}円` : '応相談'}</div>
      <div className="mb-2">都道府県: {job.pref || '指定なし'}</div>
      <div className="mb-2">滞在可: {job.has_stay ? 'あり' : 'なし'}</div>
      <div className="mb-4">{job.description}</div>
      {isPharmacist && (
        <form onSubmit={handleApply} className="border rounded p-4 mt-4 flex flex-col gap-2">
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="応募メッセージ (任意)"
            className="border rounded px-2 py-1"
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">応募する</button>
        </form>
      )}
      {!auth?.user && (
        <div className="mt-4">
          <a href="/login" className="text-blue-600 underline">ログインして応募</a>
        </div>
      )}
    </div>
  );
}
