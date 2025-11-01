import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-semibold text-green-700 tracking-wide">
          ダッシュボード
        </h2>
      }
    >
      <Head title="ダッシュボード" />

      <div className="min-h-screen bg-green-50 py-12 flex flex-col items-center">
        {/* 上部の挨拶エリア */}
        <div className="w-full max-w-4xl text-center mb-10">
          <h1 className="text-3xl font-bold text-green-700">
            ようこそ、{auth.user.name} さん 🌿
          </h1>
          <p className="text-gray-600 mt-2">
            薬局マッチングへようこそ！<br className="hidden sm:block" />
            下記メニューから各機能にアクセスできます。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-6">
          {/* カード例：薬剤師プロフィール */}
          <div className="bg-white rounded-2xl shadow-md border border-green-100 p-6 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              薬剤師プロフィール
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              あなたの経歴や希望条件を登録・編集できます。
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition-all duration-200">
              プロフィールを編集
            </button>
          </div>

          {/* カード例：薬局一覧 */}
          <div className="bg-white rounded-2xl shadow-md border border-green-100 p-6 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              薬局を探す
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              希望条件に合う薬局を検索・応募できます。
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition-all duration-200">
              薬局一覧を見る
            </button>
          </div>

          {/* カード例：メッセージ */}
          <div className="bg-white rounded-2xl shadow-md border border-green-100 p-6 hover:shadow-lg transition-all duration-200">
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              メッセージ
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              薬局担当者とのメッセージを確認できます。
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-medium transition-all duration-200">
              メッセージを開く
            </button>
          </div>
        </div>

        {/* 下部の案内 */}
        <div className="mt-16 text-gray-500 text-sm">
          ご不明点がある場合は{' '}
          <Link href="#" className="text-green-600 underline hover:text-green-700">
            サポートセンター
          </Link>{' '}
          までお問い合わせください。
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
