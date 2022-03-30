<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testing extends Model
{
    protected $table = 'testings';
    protected $primaryKey = 'id';
    protected $fillable = ['jobid', 
                            'availability',
                            'other_status',
                            'usage',
                            'other_places',
                            'connection_status',
                            'remarks',
                            'field_officer',
                            'meter_number'
                        ];   
}
