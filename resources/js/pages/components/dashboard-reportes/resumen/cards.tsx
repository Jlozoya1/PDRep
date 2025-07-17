import { DollarSign,Star,UsersRound,Clock } from 'lucide-react';

export default function Cards(){
    return(
        <>
            <div className='flex px-7 py-3 space-x-12  justify-center'>
                {/* Tiempo Promedio de Preparacion */}
                <div className="rounded-sm bg-white border border-gray-400 w-84">
                    <div className='py-4 px-5'>
                        <div className='flex items-center '>
                            <p className='text-sm'>Tiempo Promedio de Preparacion</p>
                            <Clock className='w-5 h-5 text-gray-400 ml-auto'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#4d9a0af6] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Satisfaccion del Cliente */}
                <div className="rounded-sm bg-white border border-gray-400 w-84">
                    <div className='py-4 px-5'>
                        <div className='flex items-center justify-center'>
                            <p className='text-sm'>Satisfaccion del Cliente</p>
                            <Star className='w-5 h-5 text-gray-400 ml-auto'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#4d9a0af6] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Rotacion de Mesas */}
                <div className="rounded-sm bg-white border border-gray-400 w-84">
                    <div className='py-4 px-5'>
                        <div className='flex items-center justify-center'>
                            <p className='text-sm'>Rotacion de Mesas</p>
                            <UsersRound className='w-5 h-5 text-gray-400 ml-auto'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#4d9a0af6] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
                {/* Ticket Promedio */}
                <div className="rounded-sm bg-white border border-gray-400 w-84">
                    <div className='py-4 px-5'>
                        <div className='flex items-center justify-center'>
                            <p className='text-sm'>Ticket Promedio</p>
                            <DollarSign className='w-5 h-5 text-gray-400 ml-auto'/>
                        </div>
                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-sm'>$2,452</p><br />
                            <p className='text-[#4d9a0af6] inline-flex'>+12.5%</p> desde ayer
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
