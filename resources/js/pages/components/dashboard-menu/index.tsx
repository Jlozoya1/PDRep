import { Utensils } from 'lucide-react';
import TablaMenu from './tabla';
export default function IndexMenu(){
    return(
        <>
            <div className="mt-6 border rounded-md border-gray-100 bg-white">
                <div className="px-3.5 py-2">
                    <h1 className="text-2xl">Gestion del Menu</h1>
                    <p className="text-xs text-gray-400">Administra los platos y precios del restaurante</p>

                    <div className="mt-5 flex">
                        <h1 className="text-xl">Items del Menu</h1>

                        <button className="ml-auto cursor-pointer bg-[#343434] hover:bg-[#464545] rounded-lg flex text-white px-4 py-1.5 items-center text-sm">
                            <Utensils className='w-4 h-4 mr-1.5'/>
                            Agregar Plato
                        </button>
                    </div>

                    <div className='mt-1'>
                        <TablaMenu/>
                    </div>
                </div>
            </div>
        </>
    );
}
