<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Device extends Model
{
    use HasFactory;

    protected $table = 'devices';
    protected $primaryKey = 'id';
    protected $fillable = ['name' , 'email' , 'password'];

    public $timestamps = false;
}
