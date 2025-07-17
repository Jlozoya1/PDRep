<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CategoriaProducto extends Model
{
    /** @use HasFactory<\Database\Factories\CategoriaProductoFactory> */
    use HasFactory;

    protected $fillable = [
        'nombre',
    ];

    public function pedidos() :HasMany
    {
        return $this->hasMany(Pedido::class);
    }
}
