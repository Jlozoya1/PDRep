<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Pedido extends Model
{
    /** @use HasFactory<\Database\Factories\PedidoFactory> */
    use HasFactory;

    protected $fillable = [
        'fecha_hora',
        'estado',
        'total',
        'mesa',
        'id_cliente',
    ];

    public function user() :BelongsTo
    {
        return $this->belongsTo(User::class, 'id_cliente');
    }

    public function detalles() :HasMany
    {
        return $this->hasMany(DetallePedido::class);
    }

    public function pago() :HasOne
    {
        return $this->hasOne(Pago::class);
    }
}
