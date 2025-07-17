<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::where('disponible', true)->get();
        return inertia('productos/index', ['productos' => $productos]);
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
            'precio' => 'required|numeric',
            'descripcion' => 'nullable|string',
            'imagen' => 'nullable|string',
            'disponible' => 'required|boolean',
            'id_categoria' => 'required|integer',
        ]);

        Producto::create($fields);

        return Redirect::back()->with('Success', 'Producto Creado con Exito');
    }

    public function create()
    {
        return inertia('productos/create');
    }

    public function edit(Producto $producto)
    {
        return inertia('productos/edit', ['prodcuto' => $producto]);
    }

    public function update(Request $request, Producto $producto)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
            'precio' => 'required|numeric',
            'descripcion' => 'nullable|string',
            'imagen' => 'nullable|string',
            'disponible' => 'required|boolean',
            'id_categoria' => 'required|integer',
        ]);

        $producto->update($fields);

        return Redirect::back()->with('Success', 'Producto actualizado correctamente');
    }

    public function destroy(Producto $producto)
    {
        $producto->delete();
        return to_route('producto.index')->with('message', 'Producto Eliminado');
    }


}
