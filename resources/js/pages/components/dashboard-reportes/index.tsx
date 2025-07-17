import Resumen from './resumen/index';
import Ventas from './ventas/index';
import Menu from './menu';
import Rendimiento from './rendimiento/index';
import Clientes from './clientes/index';

import { ListFilterPlus,Download } from 'lucide-react';
import { useState } from 'react';

export default function IndexReportes(){
    const [active, setActive] = useState('resumen');

    const menuItems = [
        {name: 'resumen', label:'Resumen'},
        {name: 'ventas', label:'Ventas'},
        {name: 'menu', label:'Menu'},
        {name: 'rendimiento', label:'Rendimiento'},
        {name: 'clientes', label:'Clientes'},
    ];
    const renderContent = () =>{
            switch(active){
                case 'resumen':
                    return <Resumen/>;
                case 'ventas':
                    return <Ventas/>;
                case 'menu':
                    return <Menu/>;
                case 'rendimiento':
                    return <Rendimiento/>;
                case 'clientes':
                    return <Clientes/>;
                default:
                    return <Resumen/>;

            }
        };

    return(
        <>
            <div className="mt-5 bg-white px-7 py-6 pb-12 rounded-md border border-gray-100">
                <div className="flex">
                    <ListFilterPlus className='mr-1.5'/>
                    <h1 className="text-xl">Filtros del Reporte</h1>
                </div>
                <div className='justify-center flex space-x-5'>

                    <div className='block'>
                        <p className='text-xs ml-1'>Periodo</p>
                        <select name="" id="" className='border rounded-md w-60 h-9'>
                            <option value="hola">Ultimos 7 Dias</option>
                        </select>
                    </div>

                    <div className='block'>
                        <p className='text-xs ml-1'>Categoria</p>
                        <select name="" id="" className='border rounded-md w-60 h-9'>
                            <option value="hola">Todas</option>
                        </select>
                    </div>

                    <div className='block'>
                        <p className='text-xs ml-1'>ㅤ</p>
                        <button className='border rounded-md w-60 h-9 cursor-pointer bg-[#343434] hover:bg-[#464545] text-white inline-flex justify-center items-center'>
                            <Download className='mr-2 w-5 h-5'/>
                            <p className='text-sm'>Exportar PDF</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex bg-[#F2F2F2] p-1 space-x-10 rounded-sm justify-center mt-6 mb-8'>
                {menuItems.map((item) => (
                    <button
                        key={item.name}
                        className={`cursor-pointer rounded-sm p-1.5 w-64 ${active === item.name ? 'bg-white' : 'bg-[#F2F2F2] hover:bg-[#f0eeee]'}`}
                        onClick={() => setActive(item.name)}
                    >
                        <p className='text-sm'>{item.label}</p>
                    </button>
                ))}
            </div>

            {renderContent()}
        </>
    );
}
