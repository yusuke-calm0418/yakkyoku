import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('verification.send'));
  };

  return (
    <GuestLayout>
      <Head title="メールアドレスの確認" />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-blue-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            メールアドレスの確認
          </h1>

          <p className="text-sm text-gray-600 mb-6 leading-relaxed text-center">
            登録ありがとうございます！<br />
            ご登録のメールアドレス宛に認証リンクを送信しました。<br />
            メール内のリンクをクリックして認証を完了してください。
          </p>

          {status === 'verification-link-sent' && (
            <div className="mb-6 text-sm font-medium text-green-600 text-center">
              新しい認証リンクを送信しました！
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <PrimaryButton
              disabled={processing}
              className="w-full justify-center"
            >
              認証メールを再送信
            </PrimaryButton>

            <Link
              href={route('logout')}
              method="post"
              as="button"
              className="text-sm text-gray-500 hover:text-gray-700 underline mt-2"
            >
              ログアウト
            </Link>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
