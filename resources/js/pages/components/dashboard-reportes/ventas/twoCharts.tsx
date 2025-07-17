import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

export default function TwoCharts(){
    return(
        <>
            <div className="flex justify-between mt-5 py-3">
                <div className="block bg-white rounded-md border border-gray-100 w-2/5 px-4 py-2">
                    <h1 className="text-2xl">Tendencia de Ventas</h1>
                    <p className="text-xs text-gray-400">Evolucion de las ventas diarias</p>

                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                            data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={300}
                        grid={{ vertical: true, horizontal: true }}
                    />
                </div>

                <div className="block bg-white rounded-md border border-gray-100 w-2/5 px-4 py-2">
                    <h1 className="text-2xl">Ventas por Categoria</h1>
                    <p className="text-xs text-gray-400">Distribucion de ventas por tipo de plato</p>

                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 0, value: 10, label: 'series A' },
                                { id: 1, value: 15, label: 'series B' },
                                { id: 2, value: 20, label: 'series C' },
                            ],
                            },
                        ]}
                        width={200}
                        height={300}
                    />
                </div>

            </div>
        </>
    );

}
