# app（Laravel バックエンド）

## 概要
このディレクトリはLaravelによるバックエンドAPIアプリケーションです。

## 主なコマンド

### 開発サーバーの起動（Docker）
docker compose up -d app

### マイグレーション実行
docker compose exec app php artisan migrate

### シーディング
docker compose exec app php artisan db:seed

## ディレクトリ構成
- `app/` ... アプリケーション本体
- `routes/` ... ルーティング設定
- `database/` ... マイグレーション・シーダー
- `public/` ... 公開ディレクトリ

## 開発環境
- http://localhost:8080/

## デモログイン情報
管理者: admin@example.com / password
薬剤師1: pharmacist1@example.com / password
薬剤師2: pharmacist2@example.com / password
薬剤師3: pharmacist3@example.com / password
薬局1: pharmacy1@example.com / password
薬局2: pharmacy2@example.com / password

## 補足
- .envファイルでDBやメール等の設定を行います。
- フロントエンド（React）は `src/frontend` に配置されています。

