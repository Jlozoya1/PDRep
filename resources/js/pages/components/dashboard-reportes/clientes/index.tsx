import { Star } from 'lucide-react';

export default function Clientes(){
    return(
        <>
            <div className="mt-5 flex space-x-7 justify-center mb-5">
                {/* Clientes Unicos */}
                <div className="rounded-sm bg-white border border-gray-100 w-84">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Clientes Unicos</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg font-semibold'>1247</p>
                            <p className='text-gray-500 '>+12.5% desde ayer</p>
                        </div>
                    </div>
                </div>
                {/* Clientes Recurrentes */}
                <div className="rounded-sm bg-white border border-gray-100 w-84 ">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Clientes Recurrentes</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg font-semibold'>68%</p>
                            <p className='text-gray-500 '>-2% vs mes anterior</p>
                        </div>
                    </div>
                </div>
                {/* Satisfaccion Promedio */}
                <div className="rounded-sm bg-white border border-gray-100 w-84">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Satisfaccion Promedio</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg font-semibold inline-flex'>4.7 <Star className='text-[#E9DB3F] ml-1'/></p>
                            <p className='text-gray-500 '>-0.8% vs mes anterior</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
