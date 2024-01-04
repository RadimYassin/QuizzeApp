<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
"title",
"date",
"time"
    ];


    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

}
