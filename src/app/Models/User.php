<?php

namespace App\Models;

// ...existing code...

class User extends Authenticatable
{
    // ...existing code...

    public function pharmacist()
    {
        return $this->hasOne(Pharmacist::class);
    }

    public function pharmacy()
    {
        return $this->hasOne(Pharmacy::class);
    }
}
