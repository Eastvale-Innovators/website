import backdrop from '../assets/img/vmm_images/image10.png'
import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react'

import { Footer } from '../components/footer'
import { Subscribe } from '../components/subscribe'
import ActionItems from '../components/actionItems'
import FourCardSplit from '../components/fourCardSplit'

export default function Home () {
  return (
    <div className='App font-family:league-spartan bg-back-light dark:bg-back-dark'>
      <div className='pt-5 w-full'>
        <ComplexNavbar />
      </div>
      <div>
        <header className='App-header pt-5 justify-center'>
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Home of UCSC Association of Computing Machinery (ACM) Student Chapter'
              caption='The Largest Computer Science Community @ UC Santa Cruz'
              Banner={backdrop}
            />
          </div>
        </header>
        {/* <div className="flex items-center justify-center py-10">
          <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_rZ11PibGHg?si=r-fhQ_uOUApl8-R0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="rounded-lg sm:w-1/2 lg:h-96"
          ></iframe>
        </div> */}
        <div className='dark:text-font-dark text-font-light flex justify-center p-10 text-xl'>
          <div className='w-3/4'>
            <p>
              We are a student run organization that strives to create a
              supportive and inclusive community for people of all backgrounds
              and skill levels who are passionate about computer science to
              learn and network.
            </p>
          </div>
        </div>
        <div className=''>
          <h1 className='flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center'>
            Our Work
          </h1>
          <FourCardSplit />
        </div>
        {/* <div className='flex justify-center'>
          <Subscribe />
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

function CardMenu (props) {
  return (
    <Card className='mt-6 w-96 dark:bg-primary-dark'>
      <CardHeader color='blue-gray' className='relative h-56'>
        <img src={props.timg} alt='card-image' />
      </CardHeader>
      <CardBody>
        <h1 className='mb-2 text-2xl text-font-light font-semibold dark:text-font-dark'>
          {props.header}
        </h1>
        <h1 className='dark:text-font-dark'>{props.desc}</h1>
      </CardBody>
      <CardFooter className='pt-0'>
        <Menu className='bg-back-light dark:bg-primary'>
          <MenuHandler>
            <Button color='red'>More Here</Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>
              <a href={props.dir}>
                <Button>Telemedicine</Button>
              </a>
            </MenuItem>
            <MenuItem>
              <a href={props.dir}>
                <Button color='blue'>Mustangs App</Button>
              </a>
            </MenuItem>
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
  )
}
