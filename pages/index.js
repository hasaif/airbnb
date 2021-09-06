import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="bg-black">
      <Head>
        <title>lowercase pink's airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5 text-pink'>explore nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {/* pull some data from a server API - endpoints */}
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>  
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8 text-pink'>live anywhere</h2>
          
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
        </section>

        <LargeCard
          img='https://links.papareact.com/4cj'
          title='the greatest outdoors'
          description='wishlists curated by lowercase pink'
          buttonText='get inspired'
        />
      </main>
      
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) =>  res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then(
    (res) =>  res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    },
  }
}