<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'job_id',
        'pharmacist_id',
        'status',
        'message',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function pharmacist()
    {
        return $this->belongsTo(Pharmacist::class);
    }
}
