<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MathStream extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function alResult()
    {
        return $this->belongsTo(AlResult::class);

    }
}
