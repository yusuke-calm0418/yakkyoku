<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Job;
use App\Models\Application;

class JobAppliedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $job;
    public $application;

    public function __construct(Job $job, Application $application)
    {
        $this->job = $job;
        $this->application = $application;
    }

    public function build()
    {
        return $this->subject('新しい応募がありました')
            ->view('emails.job_applied')
            ->with([
                'job' => $this->job,
                'application' => $this->application,
            ]);
    }
}
