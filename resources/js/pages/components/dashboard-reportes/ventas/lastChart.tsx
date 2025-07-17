import { BarChart } from '@mui/x-charts/BarChart';

const pedidos = [4,6,5,13,18,12,11,22,23,25,27,26];
const xLabels = [
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
];

export default function LastChart(){
    return(
        <>
            <div className="mt-5 rounded-md border border-b-gray-100 bg-white">
                <div className="block px-4 py-2">
                    <h1 className="text-2xl">Tendencia de Ventas</h1>
                    <p className="text-xs text-gray-400">Evolucion de las ventas diarias</p>
                </div>

                <BarChart
                    height={300}
                    series={[
                        { data: pedidos, label: 'Pedidos', id: 'PiD' },
                    ]}
                    xAxis={[{ data: xLabels, tickPlacement: 'middle',tickLabelPlacement: 'middle' }]}
                    yAxis={[{ width: 50 }]}
                    colors={['#D53D3D']}
                    grid={{ vertical: true, horizontal: true }}
                />
            </div>
        </>
    );
}
