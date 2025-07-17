import DataTable from "react-data-table-component";
import { Ellipsis } from 'lucide-react';

const columns = [
    {
        name: 'Nombre',
        selector: row => row.nombre,
        width: '220px',
        center: 'true',
    },
    {
        name: 'Categoria',
        selector: row => row.categoria,
        center: 'true',
    },
    {
        name: 'Precio',
        selector: row => row.precio,
        center: 'true',
    },
    {
        name: 'Estado',
        selector: row => row.estado,
        center: 'true',
        conditionalCellStyles: [
            {
                when: row => row.estado === 'Disponible',
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
                when: row => row.estado === 'Agotado',
                style: {
                    backgroundColor: '#FFB8B8',
                    borderRadius: '9999px',
                    display: 'flex',
                    color: '#A11E1E',
                    height: '30px',
                    marginTop: '10px'
                },
            },
        ],
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
        nombre: 'Pizza Margherita',
        categoria: 'Pizzas',
        precio: '$24.50',
        estado: 'Disponible',
        acciones: <Ellipsis />,
    },
    {
        id: 2,
        nombre: 'Hamburguesa Clásica',
        categoria: 'Hamburguesas',
        precio: '$18.90',
        estado: 'Agotado',
        acciones: <Ellipsis />,
    },
    {
        id: 3,
        nombre: 'Ensalada Cesar',
        categoria: 'Ensaladas',
        precio: '$12.30',
        estado: 'Agotado',
        acciones: <Ellipsis />,
    },
    {
        id: 4,
        nombre: 'Pasta Carbonara',
        categoria: 'Pastas',
        precio: '$32.80',
        estado: 'Disponible',
        acciones: <Ellipsis />,
    },
    {
        id: 5,
        nombre: 'Sushi Variado',
        categoria: 'Sushi',
        precio: '$45.60',
        estado: 'Disponible',
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

export default function TablaMenu(){
    return(
        <>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
            />
        </>
    );

}
