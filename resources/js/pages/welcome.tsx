import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowBigRight, TreePalm } from 'lucide-react';
import Header from './components/header';
import Dashboard from './dashboard';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='w-112 min-h-60 border border-gray-100 rounded-md shadow-md relative'>
                    <div className='text-2xl flex flex-col items-center justify-center '>
                        <TreePalm className='mt-5 w-7 h-7'/>
                        <h1 className='mt-3'>Bienvenido a ParaisoDrinks</h1>
                        <p className='text-xs text-gray-400'>Gestiona pedidos, mesas, inventario y reportes con la plataforma.</p>

                        <Link href="/dashboard" className='inline-flex items-center text-base text-white bg-[#343434] py-1.5 rounded-md px-3 absolute bottom-7'>
                            Comenzamos? <ArrowBigRight/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
