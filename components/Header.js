import Image from 'next/image'
import {
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon, 
    SearchIcon 
} from '@heroicons/react/solid' 
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'

function Header({ placeholder }) {
    
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)
    const router = useRouter()
    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }



    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-black shadow-md p-5 md:px-10'>
            {/* left */}
            <div onClick={() => router.push("/")} 
            className='relative flex items-center h-10 cursor-pointer'>
                <Image 
                    src='https://rebrand.ly/n3d5ovk' 
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* centre */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm border-pink'>
                <input
                    value={searchInput} 
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='flex-grow pl-5 bg-transparent outline-none text-sm text-pink placeholder-pink' 
                    type='text' 
                    placeholder={placeholder || 'start your search'}
                />
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

            {searchInput && (
                <div className='flex flex-col col-span-3 mx-auto mt-5'>
                    <DateRangePicker 
                         ranges={[selectionRange]}
                         minDate={new Date()}
                         rangeColors={['#FE2FAB']}
                         onChange={handleSelect}
                    />
                    <div className='flex items-center border-b border-pink mb-4'>
                        <h2 className='text-pink text-2xl flex-grow font-semibold'>
                            number of guests
                        </h2>
                        <UsersIcon className='text-pink h-5'/>
                        <input 
                            value={noOfGuests}
                            min={1}
                            max={10}
                            onChange={e => setNoOfGuests(e.target.value)}
                            type='number' 
                            className='w-12 pl-2 text-lg outline-none text-pink bg-black'
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-pink'>cancel</button>
                        <button onClick={search} className='flex-grow text-pink'>search</button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
