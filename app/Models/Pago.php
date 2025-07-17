<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pago extends Model
{
    /** @use HasFactory<\Database\Factories\PagoFactory> */
    use HasFactory;

    protected $fillable = [
        'id_pedido',
        'metodo_pago',
        'estado',
    ];

    public function pedido() :BelongsTo
    {
        return $this->belongsTo(Pedido::class, 'id_pedido');
    }
}
