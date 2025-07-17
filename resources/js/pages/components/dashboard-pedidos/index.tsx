import { ShoppingCart } from 'lucide-react';
import TablaPedidos from "./tabla";

export default function IndexPedidos(){
    return(
        <>
            <div className="mt-5 border rounded-md border-gray-100 bg-white">
                <div className="px-3.5 py-2">
                    <h1 className="text-2xl">Gestion de Pedidos</h1>
                    <p className="text-xs text-gray-400">Administra todos los pedidos del restaurante</p>

                    <div className="mt-5 flex">
                        <h1 className="text-xl">Pedidos activos</h1>

                        <button className="ml-auto cursor-pointer bg-[#343434] hover:bg-[#464545] rounded-lg flex text-white px-4 py-1.5 items-center text-sm">
                            <ShoppingCart className='w-4 h-4 mr-1.5'/>
                            Nuevo Pedido
                        </button>
                    </div>

                    <div className='mt-1'>
                        <TablaPedidos/>
                    </div>
                </div>
            </div>

        </>
    );
}
