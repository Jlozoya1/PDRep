<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Producto extends Model
{
    /** @use HasFactory<\Database\Factories\ProductoFactory> */
    use HasFactory;

    protected $fillable = [
        'nombre',
        'precio',
        'descripcion',
        'imagen',
        'disponible',
        'id_categoria',
    ];

    public function categoria() :BelongsTo
    {
        return $this->belongsTo(CategoriaProducto::class, 'id_categoria');
    }

    public function detalles() :HasMany
    {
        return $this->hasMany(DetallePedido::class);
    }
}
