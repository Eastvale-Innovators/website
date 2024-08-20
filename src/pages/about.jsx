import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/backdrop_1.jpg'
import { Footer } from '../components/footer'
import { Subscribe } from '../components/subscribe'
// import ThreeCardSplit from '../components/threeCardSplit'
import ActionItems from '../components/actionItems'
import TwoCardSplit from '../components/TwoCardSplit.jsx'
import FourCardSplit from '../components/fourCardSplit.jsx'

export default function About () {
  return (
    <div className='font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5'>
          <div className='w-full'>
            <ComplexNavbar />
          </div>
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='About UCSC Association of Computing Machinery (ACM) Student Chapter'
              caption='The Largest Computer Science Community @ UC Santa Cruz'
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      {/* <BiCardSection /> */}
      <div className='flex justify-center'>
        <TwoCardSplit />
      </div>
      <div className='pt-5'>
        <h1 className='flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center'>
          Our Work
        </h1>
        <FourCardSplit />
      </div>
      {/* <div className='flex justify-center'>
        <Subscribe />
      </div> */}
      <Footer />
    </div>
  )
}

export function BiCardSection () {
  return (
    <div className='dark:text-font-dark text-font-light flex justify-center p-10'>
      <div className='w-3/4'>
        <p>
          Here in the U.S., we enjoy easy access to quality healthcare and
          medicines - most of us can take a short drive to a nearby clinic,
          hospital, or pharmacy and receive what we need (even if it is a bit
          pricey at times!). It can be easy to think that most people have this
          level of access to healthcare. To the contrary, the World Health
          Organization reports that over half the world’s population does not
          have adequate access to quality healthcare.
        </p>
      </div>
    </div>
  )
}
