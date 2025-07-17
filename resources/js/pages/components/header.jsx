import { TreePalm, User } from 'lucide-react';

export default function Header(){
    return(
        <>
            <nav className='h-19 justify-between flex items-center border-b border-gray-400 '>
                <div className='flex align-middle items-center p-4 font-sans text-2xl'>
                    <TreePalm className='mr-1 h-7 w-7'/>
                    ParaisoDrinks
                </div>

                <button className='flex rounded-2xl items-center bg-[#343434] hover:bg-[#464545] px-6.5 py-2 text-white cursor-pointer mr-6'>
                    <User className='w-5 h-5 mr-1'/>
                    Admin
                </button>
            </nav>
        </>
    )
}
