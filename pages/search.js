import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/header"
import { format } from 'date-fns'
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
function Search({searchResults}) {

    const router = useRouter();

    const {location, startDate, endDate, noOfGuests} = router.query

    const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
    const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
    const range = `${formattedStartDate} - ${formattedEndDate}`

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`}/>

            <main className='flex'>
                <section className='flex-grow pt-14 px-6 text-pink bg-black'>
                    <p className='text-xs '>300+ stays - {range} - for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>cancelation flexibility</p>
                        <p className='button'>type of place</p>
                        <p className='button'>time</p>
                        <p className='button'>rooms and bed</p>
                        <p className='button'>more filters</p>
                    </div>

                    <div>
                        {searchResults.map(({img, location, title, description, star, price, total}) => (
                            <InfoCard 
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>

                    
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults}/>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').
    then(res => res.json())

    return {
        props: {
            searchResults,
        }
    }
}
