export default function CardsMenu(){
    return(
        <>
            <div className="mt-5 flex space-x-7 justify-center mb-5">
                {/* Satisfaccion del Cliente */}
                <div className="rounded-sm bg-white border border-gray-100 w-84">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Satisfaccion del Cliente</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg text-[#4DBC49] font-semibold'>68%</p>
                            <p className='text-gray-500 '>+12.5% desde ayer</p>
                        </div>
                    </div>
                </div>
                {/* Costo de Ingredientes */}
                <div className="rounded-sm bg-white border border-gray-100 w-84 ">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Costo de Ingredientes</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg text-[#F0832A] font-semibold'>32%</p>
                            <p className='text-gray-500 '>-2% vs mes anterior</p>
                        </div>
                    </div>
                </div>
                {/* Desperdicio */}
                <div className="rounded-sm bg-white border border-gray-100 w-84">
                    <div className='py-4 px-5'>
                        <p className='text-xl'>Desperdicio</p>

                        <div className='text-xs mt-4'>
                            <p className='ml-3 text-lg text-[#DC4040] font-semibold'>68%</p>
                            <p className='text-gray-500 '>-0.8% vs mes anterior</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
