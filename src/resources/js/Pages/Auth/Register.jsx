import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const submit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <GuestLayout>
      <Head title="新規登録" />
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
          <form onSubmit={submit} className="space-y-5">
            <div>
              <InputLabel htmlFor="name" value="お名前" />
              <TextInput
                id="name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                autoComplete="name"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>

            <div>
              <InputLabel htmlFor="email" value="メールアドレス" />
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                autoComplete="username"
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
                autoComplete="new-password"
                onChange={(e) => setData('password', e.target.value)}
              />
              <InputError message={errors.password} className="mt-2" />
            </div>

            <div>
              <InputLabel htmlFor="password_confirmation" value="パスワード（確認）" />
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-200"
                autoComplete="new-password"
                onChange={(e) => setData('password_confirmation', e.target.value)}
              />
              <InputError message={errors.password_confirmation} className="mt-2" />
            </div>

            <PrimaryButton
              className="w-full justify-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-200 shadow-sm"
              disabled={processing}
            >
              登録する
            </PrimaryButton>
          </form>

          <div className="text-center mt-6 text-sm text-gray-600">
            すでにアカウントをお持ちの方は{' '}
            <Link
              href={route('login')}
              className="text-green-600 font-medium hover:underline"
            >
              ログイン
            </Link>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}
