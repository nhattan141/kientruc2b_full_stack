<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'address', 'category_id', 'created_at', 'updated_at'];

    //declared images relationship
    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
