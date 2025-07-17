import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import Header from './components/header';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Header/>
            aqui ira el welcome
        </>
    );
}
