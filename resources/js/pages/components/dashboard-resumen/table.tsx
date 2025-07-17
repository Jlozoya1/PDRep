import DataTable from 'react-data-table-component';
import { Ellipsis } from 'lucide-react';
const columns = [
    {
        name: 'Pedido',
        selector: row => row.pedido,
        width: '130px',
        center: 'true',
    },
    {
        name: 'Mesa',
        selector: row => row.mesa,
        width: '130px',
        center: 'true',
    },
    {
        name: 'Items',
        selector: row => row.items,
        width: '400px',
        center: 'true',
    },
    {
        name: 'Total',
        selector: row => row.total,
        width: '160px',
        marginRight: '100px',
        center: 'true',
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        center: 'true',
        width: '200px',
        conditionalCellStyles: [
            {
                when: row => row.estado === 'Preparando',
                style: {
                    backgroundColor: '#E3F0FF',
                    borderRadius: '9999px',
                    display: 'flex',
                    // maxWidth: '106px',
                    // maxWidth: '60%',
                    color: '#003383',
                    height: '30px',
                    marginTop: '10px'
                },
            },
            {
                when: row => row.estado === 'Listo',
                style: {
                    backgroundColor: '#F1FFE4',
                    borderRadius: '9999px',
                    display: 'flex',
                    color: '#63C909',
                    height: '30px',
                    marginTop: '10px'
                },
            },
            {
                when: row => row.estado === 'Pendiente',
                style: {
                    backgroundColor: '#FFF3E5',
                    borderRadius: '9999px',
                    display: 'flex',
                    color: '#FF9000',
                    height: '30px',
                    marginTop: '10px'
                },
            },
            {
                when: row => row.estado === 'Entregado',
                style: {
                    backgroundColor: '#FCEFFF',
                    borderRadius: '9999px',
                    display: 'flex',
                    color: '#B330D7',
                    height: '30px',
                    marginTop: '10px'
                },
            },
        ]
    },
    {
        name: 'Tiempo',
        selector: row => row.tiempo,
        width: '220px',
        center: 'true',
    },
    {
        name: 'Acciones',
        selector: row => row.acciones,
        center: 'true',
    },
];

const data = [
    {
        id: 1,
        pedido: '#001',
        mesa: 'Mesa 5',
        items: 'Pizza Margherita, Coca Cola',
        total: '$24.50',
        estado: 'Preparando',
        tiempo: '15 min',
        acciones: <Ellipsis />,
    },
    {
        id: 2,
        pedido: '#002',
        mesa: 'Mesa 4',
        items: 'Pizza Margherita, Coca Cola',
        total: '$24.50',
        estado: 'Preparando',
        tiempo: '15 min',
        acciones: <Ellipsis />,
    },
    {
        id: 3,
        pedido: '#003',
        mesa: 'Mesa 1',
        items: 'Pizza Margherita, Coca Cola',
        total: '$24.50',
        estado: 'Listo',
        tiempo: '15 min',
        acciones: <Ellipsis />,
    },
    {
        id: 4,
        pedido: '#004',
        mesa: 'Mesa 12',
        items: 'Pizza Margherita, Coca Cola',
        total: '$24.50',
        estado: 'Pendiente',
        tiempo: '15 min',
        acciones: <Ellipsis />,
    },
    {
        id: 5,
        pedido: '#005',
        mesa: 'Mesa 14',
        items: 'Pizza Margherita, Coca Cola',
        total: '$24.50',
        estado: 'Entregado',
        tiempo: '15 min',
        acciones: <Ellipsis />,
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

export default function Table(){
    return (
        <>
            <div className="mt-6 border rounded-md border-gray-100 bg-white">
                <div className="px-3.5 py-2">
                    <h1 className="text-2xl">Pedidos Realizados</h1>
                    <p className="text-xs text-gray-400">Los ultimos pedidos realizados en el restaurante</p>

                    <div className='mt-1'>
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
