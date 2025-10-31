import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('login'), { onFinish: () => reset('password') });
  };

  return (
    <GuestLayout>
      <Head title="ログイン" />
      <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
        {/* ロゴ・タイトル */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700 tracking-wide">
            薬局マッチング
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            薬局と薬剤師をつなぐマッチングサービス
          </p>
        </div>

        {/* カード本体 */}
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-green-100">
          {status && (
            <div className="mb-4 text-sm font-medium text-green-600 bg-green-50 border border-green-100 px-3 py-2 rounded">
              {status}
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">
            <div>
              <InputLabel htmlFor="email" value="メールアドレス" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                autoComplete="username"
                isFocused
                onChange={(e) => setData('email', e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>

            <div>
              <InputLabel htmlFor="password" value="パスワード" />
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                autoComplete="current-password"
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData('remember', e.target.checked)}
                />
                <span className="ml-2 text-gray-700">ログイン状態を保持する</span>
              </label>

              {canResetPassword && (
                <Link
                  href={route('password.request')}
                  className="text-green-600 hover:text-green-700 underline"
                >
                  パスワードをお忘れですか？
                </Link>
              )}
            </div>

            <PrimaryButton
              className="w-full justify-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-200 shadow-sm"
              disabled={processing}
            >
              ログイン
            </PrimaryButton>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            アカウントをお持ちでない方は{' '}
            <Link
              href={route('register')}
              className="text-green-600 font-medium hover:underline"
            >
              新規登録
            </Link>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
