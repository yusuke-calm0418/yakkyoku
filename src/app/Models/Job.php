<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'pharmacy_id',
        'title',
        'start_date',
        'end_date',
        'hourly_rate',
        'pref',
        'has_stay',
        'description',
    ];

    public function pharmacy()
    {
        return $this->belongsTo(Pharmacy::class);
    }

    public function applications()
    {
        return $this->hasMany(Application::class);
    }

    // 代表的なスコープ
    public function scopePublished($query)
    {
        // ダミー: 全件
        return $query;
    }
}
