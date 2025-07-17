import { BarChart } from '@mui/x-charts/BarChart';

const pedidos = [800, 900, 400, 200, 1890, 1250, 1600];
const ventas = [2400, 7600, 4800, 2700, 7700, 3800, 10800];
const xLabels = [
  'Lun',
  'Mar',
  'Mie',
  'Jue',
  'Vie',
  'Sab',
  'Dom',
];

export default function Chart(){
    return(
        <>
            <div className="mt-5 px-7 py-3 pb-12 rounded-md bg-white border border-gray-100">
                <div className="block">
                    <h1 className="text-2xl">Ventas de la Semana</h1>
                    <p className="text-xs text-gray-400">Comparacion de Ventas y numero de pedidos</p>
                </div>

                <div className="chart">
                    <BarChart
                        height={300}
                        series={[
                            { data: ventas, label: 'Ventas', id: 'ViD' },
                            { data: pedidos, label: 'Pedidos', id: 'PiD' },
                        ]}
                        xAxis={[{ data: xLabels, tickPlacement: 'middle',tickLabelPlacement: 'middle' }]}
                        yAxis={[{ width: 50 }]}
                        colors={['#936F92', '#A2D893']}
                    />
                </div>
            </div>
        </>
    );
}
