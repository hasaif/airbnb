import Image from 'next/image'
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon, 
    SearchIcon 
} from '@heroicons/react/solid' 

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-black shadow-md p-5 md:px-10'>
            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer'>
                <Image 
                    src='https://rebrand.ly/n3d5ovk' 
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* centre */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm border-pink'>
                <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-pink placeholder-pink' type='text' placeholder='start your search'/>
                <SearchIcon className='hidden md:inline-flex md:mx-2 h-8 bg-pink rounded-full p-2 cursor-pointer'/>
            </div>

            {/* right */}
            <div className='flex items-center space-x-4 justify-end text-pink'>
                <p className='hidden lg:inline cursor-pointer'>become a host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full border-pink'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}

export default Header
