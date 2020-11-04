<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreamType extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function alResults()
    {
        return $this->hasMany(AlResult::class);
    }
}
