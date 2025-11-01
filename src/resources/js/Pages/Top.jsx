import { Head, Link } from '@inertiajs/react';

export default function Top() {
  return (
    <>
      <Head title="Yakkyoku | 薬剤師と薬局をつなぐマッチングプラットフォーム" />
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-green-100 to-blue-50">
          <h1 className="text-5xl font-bold mb-4">Yakkyoku</h1>
          <p className="text-lg mb-8 max-w-2xl leading-relaxed">
            薬剤師と薬局をつなぐマッチングプラットフォーム。<br />
            スキル・勤務条件・地域に合わせて、最適な出会いをサポートします。
          </p>
          <div className="flex space-x-4">
            <Link
              href={route('register')}
              className="px-8 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
            >
              新規登録
            </Link>
            <Link
              href={route('login')}
              className="px-8 py-3 bg-white border border-blue-600 text-blue-600 text-lg rounded-lg shadow hover:bg-blue-50 transition"
            >
              ログイン
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">Yakkyokuの特徴</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">薬剤師×薬局をマッチング</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  登録するだけで、あなたの条件に合った薬局や薬剤師を自動で提案。<br />
                  忙しい日常の中でも効率的に出会えます。
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">柔軟な働き方をサポート</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  常勤・パート・スポット勤務など、あなたのライフスタイルに合わせて選択可能。<br />
                  無理なくキャリアを築けます。
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">安心・安全の仕組み</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  厳選された薬局のみ掲載し、レビュー・評価システムも搭載。<br />
                  信頼できるパートナー探しを実現します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-green-100">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">ご利用の流れ</h2>
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">① 登録</h3>
                <p className="text-gray-600 text-sm">
                  薬剤師または薬局としてアカウントを登録します。  
                  必要なプロフィール情報を入力するだけ。
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">② マッチング</h3>
                <p className="text-gray-600 text-sm">
                  条件に基づいて最適な相手を自動提案。  
                  気になる相手に「応募」または「スカウト」を送信。
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2">③ 契約・勤務開始</h3>
                <p className="text-gray-600 text-sm">
                  双方が合意後、勤務開始までスムーズに進行。  
                  Yakkyokuがやり取りをサポートします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">さあ、Yakkyokuをはじめよう。</h2>
          <p className="mb-8 text-lg">
            新しい出会いが、あなたのキャリアを変えるかもしれません。
          </p>
          <Link
            href={route('register')}
            className="px-10 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            無料で登録する
          </Link>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-100 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Yakkyoku. All rights reserved.
        </footer>
      </div>
    </>
  );
}
