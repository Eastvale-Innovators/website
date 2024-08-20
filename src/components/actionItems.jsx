import research from '../assets/img/vmm_images/image5_1.png'
import outreach from '../assets/img/vmm_images/image2.jpg'
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

export default function ActionItems () {
  const desc3 =
    "SlugLoop is UCSC's very own bus tracking app created and updated by students. It lets you know the status of loop buses and city buses, so you know exactly when to be at a bus stop."
  return (
    <div className='flex flex-col'>
      <h1 className='flex justify-center text-3xl p-2 pb-5 font-bold text-font-light dark:text-font-dark xxs:items-center'>
        Our Work
      </h1>
      <div className='flex justify-center w-full'>
        <div className='flex md:flex-row sm:flex-col'>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='Workshops'
              desc='We know how hard it can be to learn new skills and technologies apart from those taught in classes. That’s why we host a variety of workshops for different career paths in computer science. In the past we’ve held workshops on preparing for coding interviews, getting familiar with machine learning, and building your own portfolio website.'
              dir='/#/works'
              butt={false}
              timg={research}
            />
          </div>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='ACM Hacks'
              desc='ACM Hacks features guest speakers and various workshops from Google DSC, Santa Cruz AI, SlugCP, and GDA. This is a great opportunity to work on projects, win prizes, and learn about some cool computer science tools and concepts.'
              dir='/#/works'
              butt={true}
              timg={outreach}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='flex md:flex-row sm:flex-col'>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='SlugLoop'
              desc={desc3}
              dir='/#/works'
              butt={true}
              timg={research}
            />
          </div>
          <div className='px-24 xxs:py-5 md:py-5 sm:py-5'>
            <CardDefault
              header='ACM Research Lab'
              desc='This is a student-led research lab working on advancing CS and CS adjacent research through the development of tools, datasets, and compilation of literature by students at UCSC. Each quarter will include a showcase of work done during the entire period.'
              dir='/#/works'
              butt={false}
              timg={outreach}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CardDefault (props) {
  return (
    <Card className='mt-6 w-96 dark:bg-primary-dark'>
      <CardHeader color='blue-gray' className='h-42'>
        <img src={props.timg} alt='card-image' className='h-42' />
      </CardHeader>
      <CardBody>
        <h1 className='text-2xl font-semibold dark:text-font-dark'>
          {props.header}
        </h1>
        <h1 className='dark:text-font-dark'>{props.desc}</h1>
      </CardBody>

      <CardFooter className='pt-0'>
        {props.butt ? (
          <a href={props.dir}>
            <Button color='blue'>Read More</Button>
          </a>
        ) : null}
      </CardFooter>
    </Card>
  )
}
