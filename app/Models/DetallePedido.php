<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DetallePedido extends Model
{
    /** @use HasFactory<\Database\Factories\DetallePedidoFactory> */
    use HasFactory;

    protected $fillable = [
        'id_pedido',
        'id_producto',
        'cantidad',
        'precio_unitario',
    ];

    public function pedido() :BelongsTo
    {
        return $this->belongsTo(Pedido::class, 'id_pedido');
    }

    public function producto() :BelongsTo
    {
        return $this->belongsTo(Producto::class, 'id_producto');
    }
}
