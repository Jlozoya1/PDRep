import { DollarSign,ShoppingCart,UsersRound,Clock } from 'lucide-react';

export default function Cards(){
    return(
        <>
            <div className="mt-5 flex bg-white px-7 py-3 rounded-md border border-gray-100 space-x-18  justify-center">
                {/* Carta Verde */}
                <div className="rounded-sm bg-[#F1FFE4] border border-[#63c909a5] w-52">
                    <div className='py-2 px-5'>
                        <div className='inline-flex items-center space-x-14'>
                            <p className='text-sm'>Ventas del dia</p>
                            <DollarSign className='w-5 h-5 text-[#63c909a5]'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#4d9a0af6] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Carta Azul */}
                <div className="rounded-sm bg-[#E3F0FF] border border-[#0073ff88] w-52">
                    <div className='py-2 px-5'>
                        <div className='inline-flex items-center space-x-10'>
                            <p className='text-sm'>Pedidos Activos</p>
                            <ShoppingCart className='w-5 h-5 text-[#0073ff88]'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>23</p><br />
                            <p className='text-[#0073ff88] inline-flex'>+3</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Carta Naranja */}
                <div className="rounded-sm bg-[#FFF3E5] border border-[#ff91007d] w-52">
                    <div className='py-2 px-5'>
                        <div className='inline-flex items-center space-x-8'>
                            <p className='text-sm'>Mesas Ocupadas</p>
                            <UsersRound className='w-5 h-5 text-[#ff91007d]'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#ff91007d] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Carta Morada */}
                <div className="rounded-sm bg-[#FCEFFF] border border-[#b330d782] w-52">
                    <div className='py-2 px-5'>
                        <div className='inline-flex items-center space-x-6'>
                            <p className='text-sm'>Tiempo Promedio</p>
                            <Clock className='w-5 h-5 text-[#b330d782]'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#b330d782] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
