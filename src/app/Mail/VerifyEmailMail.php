<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyEmailMail extends Mailable
{
    use SerializesModels;

    public $user;
    public $url;

    public function __construct($user, $url)
    {
        $this->user = $user;
        $this->url = $url;
    }

    public function build()
    {
        return $this->subject('【Yakkyoku】メールアドレスの確認をお願いします')
            ->from('noreply@yakkyoku.local', 'Yakkyoku')
            ->view('emails.verify-email');
    }
}
