<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function alResults() {

        return $this->hasOne(AlResult::class);
    }

    public function olResults() {

        return $this->hasOne(OlResult::class);
    }

    public function course() {

        return $this->belongsTo(Course::class);
    }
}
