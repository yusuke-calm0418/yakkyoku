<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;
use App\Models\Application;

class ApplicationStatusChanged extends Notification
{
    use Queueable;

    public $application;

    public function __construct(Application $application)
    {
        $this->application = $application;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $status = $this->application->status === 'approved' ? '承認' : '却下';
        return (new MailMessage)
            ->subject('応募ステータスが変更されました')
            ->line("あなたの応募が「{$status}」されました。")
            ->line('求人タイトル: ' . $this->application->job->title)
            ->line('ご利用ありがとうございます。');
    }
}
