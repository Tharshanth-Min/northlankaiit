<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlResult extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function student()
    {
        return $this->belongsTo(Student::class);

    }


    public function streamType()
    {
        return $this->belongsTo(StreamType::class);
    }

    public function mathStream() {
        return $this->hasOne(MathStream::class);
    }

    public function scienceStream() {
        return $this->hasOne(ScienceStream::class);
    }


    public function commerceStream() {
        return $this->hasOne(CommerceStream::class);
    }


    public function artStream() {
        return $this->hasOne(ArtStream::class);
    }

    public function technologyStream() {
        return $this->hasMany(TechnologyStream::class);
    }
}
