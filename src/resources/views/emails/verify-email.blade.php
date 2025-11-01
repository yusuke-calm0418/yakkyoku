<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Yakkyoku メール認証</title>
</head>
<body style="margin:0; padding:0; background:linear-gradient(180deg,#dcfce7 0%,#e0f2fe 100%); font-family:'Helvetica Neue', Arial, sans-serif;">

    <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff; border-radius:16px; box-shadow:0 8px 20px rgba(0,0,0,0.08); padding:48px 32px;">
                    <tr>
                        <td align="center">
                            <h1 style="font-size:24px; color:#0f172a; margin-bottom:16px;">Yakkyoku メールアドレスの確認</h1>
                            <p style="font-size:15px; color:#334155; line-height:1.7; margin-bottom:32px;">
                                {{ $user->name }} 様<br>
                                Yakkyokuにご登録ありがとうございます。<br>
                                以下のボタンをクリックしてメールアドレスを認証してください。
                            </p>

                            <a href="{{ $url }}" style="background:linear-gradient(90deg,#16a34a,#2563eb); color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:8px; display:inline-block; font-weight:600; font-size:16px;">
                                メールアドレスを確認する
                            </a>

                            <p style="color:#64748b; font-size:13px; margin-top:36px; line-height:1.5;">
                                もしこのメールに心当たりがない場合は、このまま破棄してください。<br>
                                ご不明点がございましたら <a href="https://yakkyoku.jp/contact" style="color:#2563eb; text-decoration:none;">お問い合わせ</a> ください。
                            </p>
                        </td>
                    </tr>
                </table>

                <p style="color:#94a3b8; font-size:12px; margin-top:24px;">
                    © {{ date('Y') }} Yakkyoku. All rights reserved.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>
