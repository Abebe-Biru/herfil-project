<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use HasFactory;

    //* The attributes that are mass assignable
    protected $fillable = [
        'hid',
        'title',
        'description',
        'price',
        'stock',
        'general_category',
        'specific_category',
        'purpose',
        'thumbnail',
        'images',
    ];

    protected $casts = [
        'images' => 'array',
    ];

    // protected $appends = ['thumbnail_url', 'images_urls'];

    public function getThumbnailUrlAttribute()
    {
        return Storage::url($this->thumbnail);
    }

    // Define the "images" attribute accessor to convert the array to JSON
    public function getImagesUrlsAttribute($value)
    {
        // Ensure that $value is an array before attempting to convert it
        if (!is_array($value)) {
            return json_decode($value, true);
        }

        return $value;
    }

    // Define the "images" attribute mutator to store it as JSON
    public function setImagesUrlsAttribute($value)
    {
        // Ensure that $value is an array before attempting to convert it to JSON
        if (is_array($value)) {
            $this->attributes['images'] = json_encode($value);
        } else {
            $this->attributes['images'] = $value;
        }
    }

}