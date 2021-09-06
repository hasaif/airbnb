import Image  from "next/image"

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px]'>
            <Image 
                src='https://rebrand.ly/8i4wwk0'
                layout='fill'
                objectFit='cover'
            />
            <div className='absolute top-1/2 w-full text-center'> 
                <p className='text-sm sm:text-lg'>not sure where to go? perfect.</p>
                <button className='text-black bg-pink px-10 py-4 shadow-md rounded-full 
                font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                    i'm flexible
                </button>
            </div>
        </div>
    )
}

export default Banner
