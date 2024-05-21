<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'product_id',
        'product_count',
        'product_price'
    ];

    public function product()
    {
        return $this->hasOne(Tovary::class, 'id', 'product_id');
    }
}
