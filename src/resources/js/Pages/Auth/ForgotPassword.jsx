import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('password.email'));
  };

  return (
    <GuestLayout>
      <Head title="パスワード再設定" />

      <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700 tracking-wide">
            薬局マッチング
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            パスワード再設定リンクの送信
          </p>
        </div>

        {/* カード */}
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-green-100">
          <div className="mb-4 text-sm text-gray-700 leading-relaxed">
            ご登録のメールアドレスを入力してください。<br />
            パスワード再設定用のリンクをお送りします。
          </div>

          {status && (
            <div className="mb-4 text-sm font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-2 rounded">
              {status}
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            <div>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                isFocused={true}
                placeholder="you@example.com"
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>

            <PrimaryButton
              className="w-full justify-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-200 shadow-sm"
              disabled={processing}
            >
              再設定リンクを送信
            </PrimaryButton>
          </form>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          <Link
            href={route('login')}
            className="text-green-600 font-medium hover:underline"
          >
            ログイン画面へ戻る
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
