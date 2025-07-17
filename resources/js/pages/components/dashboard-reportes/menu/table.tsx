import DataTable from 'react-data-table-component';
import { TrendingUp,TrendingDown,Star } from 'lucide-react';

const columns = [
    {
        name: 'Ranking',
        selector: row => row.ranking,
        width: '130px',
        center: 'true',
        cell: row => (
            row.topRank
                ? <div className='bg-[#262626] flex text-white rounded-3xl w-12 h-6 justify-center items-center'>{row.ranking}</div>
                : <div className='bg-[#c8c8c87b] text-black flex rounded-3xl w-12 h-6 justify-center items-center'>{row.ranking}</div>
        )
    },
    {
        name: 'Plato',
        selector: row => row.plato,
        width: '250px',
        center: 'true',
    },
    {
        name: 'Ventas',
        selector: row => row.ventas,
        width: '400px',
        center: 'true',
    },
    {
        name: 'Ingresos',
        selector: row => row.ingresos,
        width: '160px',
        marginRight: '100px',
        center: 'true',
    },
    {
        name: 'Rating',
        selector: row => row.rating,
        center: 'true',
        width: '200px',
        cell: row => (<div className='flex items-center justify-center'><Star className='w-4 h-4 text-[#E9DB3F]'/>{row.rating}</div>)
    },
    {
        name: 'Tendencia',
        selector: row => row.tendencia,
        width: '220px',
        center: 'true',
        cell: row => (
            row.tendencia
                ? <TrendingUp className='text-[#63C909] mx-auto' />
                : <TrendingDown className='text-[#DC4040] mx-auto' />
        )
    },
];

const data = [
    {
        id: 1,
        ranking: '#1',
        plato: 'Pizza Margherita',
        ventas: '156 Unidades',
        ingresos: '$2,886',
        rating: '4.8',
        topRank: true,
        tendencia: true,
    },
    {
        id: 2,
        ranking: '#2',
        plato: 'Pizza Margherita',
        ventas: '156 Unidades',
        ingresos: '$2,886',
        rating: '4.6',
        topRank: true,
        tendencia: false,
    },
    {
        id: 3,
        ranking: '#3',
        plato: 'Pizza Margherita',
        ventas: '156 Unidades',
        ingresos: '$2,886',
        rating: '4.7',
        topRank: true,
        tendencia: true,
    },
    {
        id: 4,
        ranking: '#4',
        plato: 'Pizza Margherita',
        ventas: '156 Unidades',
        ingresos: '$2,886',
        rating: '4.5',
        topRank: false,
        tendencia: true,
    },
    {
        id: 5,
        ranking: '#5',
        plato: 'Pizza Margherita',
        ventas: '156 Unidades',
        ingresos: '$2,886',
        rating: '4.9',
        topRank: false,
        tendencia: true,
    },
];

const customStyles = {
  headCells: {
    style: {
      color: '#99a1af',
      fontWeight: 'bold',
    },
  },
};

export default function TablePlates(){
    return(
        <div className="px-3.5 py-2 rounded-md border border-gray-100 bg-white">
            <h1 className="text-2xl">Platos mas Vendidos</h1>
            <p className="text-xs text-gray-400">Ranking de los platos con mejor rendimiento</p>

            <DataTable
                className='mt-1'
                columns={columns}
                data={data}
                customStyles={customStyles}
            />
        </div>
    );
}
