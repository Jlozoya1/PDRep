<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function index()
    {
        $pedidos = Pedido::all();
        return inertia('pedidos/index', ['pedidos' => $pedidos]);
    }
    public function store()
    {

    }
    public function create()
    {

    }
    public function show()
    {

    }


    public function update()
    {

    }
    public function destroy()
    {

    }
}
