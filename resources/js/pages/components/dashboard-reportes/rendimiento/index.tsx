export default function Rendimiento(){
    return(
        <>
            <div className="flex justify-between mt-5 py-3">
                <div className="block bg-white rounded-md border border-gray-100 w-2/5 px-4 py-2">
                    <h1 className="text-2xl">Tiempos de Servicio</h1>
                    <p className="text-xs text-gray-400 mb-6">Analisis de eficiencia operativa</p>

                    <div className="space-y-5 mb-5">
                        <div className="flex items-center">
                            <p>Tiempo promedio de preparacion</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">18 min</div>
                        </div>

                        <div className="flex items-center">
                            <p>Tiempo promedio de entrega</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">6 min</div>
                        </div>

                        <div className="flex items-center">
                            <p>Tiempo total promedio</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">24 min</div>
                        </div>

                        <div className="flex items-center">
                            <p>Meta Objetivo</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">20 min</div>
                        </div>
                    </div>
                </div>

                <div className="block bg-white rounded-md border border-gray-100 w-2/5 px-4 py-2">
                    <h1 className="text-2xl">Eficiencia Personal</h1>
                    <p className="text-xs text-gray-400 mb-6">Rendimiento del Equipo</p>

                    <div className="space-y-5 mb-5">
                        <div className="flex items-center">
                            <p>Pedidos por mesero/hora</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">12.5</div>
                        </div>

                        <div className="flex items-center">
                            <p>Pedidos por cocinero/hora</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">8.2</div>
                        </div>

                        <div className="flex items-center">
                            <p>Tasa de errores</p>
                            <div className="rounded-full bg-[#E45151] text-white text-sm ml-auto mr-6 px-2 py-1">2.1%</div>
                        </div>

                        <div className="flex items-center">
                            <p>Satisfaccion del equipo</p>
                            <div className="rounded-full bg-[#343434] text-white text-sm ml-auto mr-6 px-2 py-1">4.3/5</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
