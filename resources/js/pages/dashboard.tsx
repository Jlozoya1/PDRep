import { type BreadcrumbItem } from '@/types';
import Header from './components/header';
import Resumen from './components/dashboard-resumen/index';
import Pedidos from './components/dashboard-pedidos/index';
import Menu from './components/dashboard-menu/index';
import Reportes from './components/dashboard-reportes';
import { useState } from 'react';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Dashboard',
//         href: '/dashboard',
//     },
// ];

export default function Dashboard() {
    const [active, setActive] = useState('resumen');

    const menuItems = [
        {name: 'resumen', label:'Resumen'},
        {name: 'pedidos', label:'Pedidos'},
        {name: 'menu', label:'Menu'},
        {name: 'reportes', label:'Reportes'},
    ];

    const renderContent = () =>{
        switch(active){
            case 'resumen':
                return <Resumen/>;
            case 'pedidos':
                return <Pedidos/>;
            case 'menu':
                return <Menu/>;
            case 'reportes':
                return <Reportes/>;
            default:
                return <Resumen/>;

        }
    };

    return (
        <>
            <Header/>

            <div className='bg-[#f6f4f469] min-h-screen'>
                <div className='p-6'>
                    <div className='inline-flex bg-[#F2F2F2] p-1 space-x-4 rounded-sm'>
                        {menuItems.map((item) => (
                            <button
                                key={item.name}
                                className={`cursor-pointer rounded-sm p-1 w-22 ${active === item.name ? 'bg-white' : 'bg-[#F2F2F2] hover:bg-[#f0eeee]'}`}
                                onClick={() => setActive(item.name)}
                            >
                                <p className='text-sm'>{item.label}</p>
                            </button>
                        ))}
                    </div>

                    {renderContent()}
                </div>
            </div>
        </>
    );
}
