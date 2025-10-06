<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Pharmacist;
use App\Models\Pharmacy;
use App\Models\Job;
use App\Models\Application;
use Spatie\Permission\Models\Role;

class DemoSeeder extends Seeder
{
    public function run(): void
    {
        // ロール
        foreach (['admin', 'pharmacist', 'pharmacy'] as $role) {
            Role::firstOrCreate(['name' => $role]);
        }

        // 管理者
        $admin = User::create([
            'name' => '管理者',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole('admin');

        // 薬剤師3名
        $pharmacists = [];
        for ($i = 1; $i <= 3; $i++) {
            $user = User::create([
                'name' => "薬剤師{$i}",
                'email' => "pharmacist{$i}@example.com",
                'password' => Hash::make('password'),
            ]);
            $user->assignRole('pharmacist');
            $pharmacists[] = Pharmacist::create([
                'user_id' => $user->id,
                'full_name' => "薬剤師{$i} 太郎",
                'bio' => "薬剤師{$i}の自己紹介",
            ]);
        }

        // 薬局2社
        $pharmacies = [];
        for ($i = 1; $i <= 2; $i++) {
            $user = User::create([
                'name' => "薬局{$i}",
                'email' => "pharmacy{$i}@example.com",
                'password' => Hash::make('password'),
            ]);
            $user->assignRole('pharmacy');
            $pharmacies[] = Pharmacy::create([
                'user_id' => $user->id,
                'name' => "薬局{$i}株式会社",
                'pref' => '東京都',
                'address' => "東京都千代田区{$i}-1-1",
                'contact_email' => "pharmacy{$i}@example.com",
            ]);
        }

        // 求人5件
        $jobs = [];
        for ($i = 1; $i <= 5; $i++) {
            $pharmacy = $pharmacies[$i % 2];
            $jobs[] = Job::create([
                'pharmacy_id' => $pharmacy->id,
                'title' => "短期薬剤師募集{$i}",
                'start_date' => now()->addDays($i),
                'end_date' => now()->addDays($i + 7),
                'hourly_rate' => 2500 + $i * 100,
                'pref' => $pharmacy->pref,
                'has_stay' => $i % 2 === 0,
                'description' => "仕事内容詳細{$i}",
            ]);
        }

        // 応募3件
        for ($i = 0; $i < 3; $i++) {
            Application::create([
                'job_id' => $jobs[$i]->id,
                'pharmacist_id' => $pharmacists[$i]->id,
                'status' => 'pending',
                'message' => "応募メッセージ{$i}",
            ]);
        }
    }
}
