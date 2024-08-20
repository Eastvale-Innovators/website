import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/backdrop_1.jpg'
// import ThreeCardSplit from '../components/threeCardSplit'
import { Footer } from '../components/footer'
// import FourCardSplit from '../components/fourCardSplit'
// import { Subscribe } from '../components/subscribe'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip
} from '@material-tailwind/react'

export default function OurWorks () {
  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner title='Our Team' caption='' Banner={backdrop} />
          </div>
        </header>
        {/* <div className='flex justify-center'>
          <FourCardSplit />
        </div>
        <div className='flex justify-center'>
          <Subscribe />
        </div> */}
        <div className='flex justify-center'>
          <div className='flex flex-wrap w-3/4'>
            <ProfileCard />
          </div>
        </div>

        <div className='flex justify-center'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

function ProfileCard () {
  return (
    <div className='p-5'>
      <Card className='w-80'>
        <CardHeader floated={false} className='h-72'>
          <img
            src='https://docs.material-tailwind.com/img/team-3.jpg'
            alt='profile-picture'
          />
        </CardHeader>
        <CardBody className='text-center'>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            Natalie Paisley
          </Typography>
          <Typography color='blue-gray' className='font-medium' textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
        <CardFooter className='flex justify-center gap-7 pt-2'>
          <Tooltip content='Like'>
            <Typography
              as='a'
              href='#facebook'
              variant='lead'
              color='blue'
              textGradient
            >
              <i className='fab fa-facebook' />
            </Typography>
          </Tooltip>
          <Tooltip content='Follow'>
            <Typography
              as='a'
              href='#twitter'
              variant='lead'
              color='light-blue'
              textGradient
            >
              <i className='fab fa-twitter' />
            </Typography>
          </Tooltip>
          <Tooltip content='Follow'>
            <Typography
              as='a'
              href='#instagram'
              variant='lead'
              color='purple'
              textGradient
            >
              <i className='fab fa-instagram' />
            </Typography>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  )
}
