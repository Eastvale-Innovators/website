import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  CardFooter,
  Button
} from '@material-tailwind/react'

export default function FourCardSplit () {
  return (
    <div className='flex justify-center'>
      <div className='flex-row justify-center w-3/4'>
        <div className='flex justify-between space-x-4'>
          <div className='mt-6 w-1/2'>
            <Card className='dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  ACM Research lab
                </Typography>
                <Typography className='dark:text-font-dark'>
                  This is a student-led research lab working on advancing CS and
                  CS adjacent research through the development of tools,
                  datasets, and compilation of literature by students at UCSC.
                  Each quarter will include a showcase of work done during the
                  entire period.
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className='mt-6 w-1/2 h-full'>
            <Card className='dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  ACM Hacks
                </Typography>
                <Typography className='dark:text-font-dark'>
                  ACM Hacks features guest speakers and various workshops from
                  Google DSC, Santa Cruz AI, SlugCP, and GDA. This is a great
                  opportunity to work on projects, win prizes, and learn about
                  some cool computer science tools and concepts.
                </Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <a>
                  <Button color='blue'>Read More</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className='flex space-x-4'>
          <div className='w-1/3'>
            <Card className='mt-6 dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  SlugLoop
                </Typography>
                <Typography className='dark:text-font-dark'>
                  SlugLoop is UCSC's very own bus tracking app created and
                  updated by students. It lets you know the status of loop buses
                  and city buses, so you know exactly when to be at a bus stop.
                </Typography>
              </CardBody>
              <CardFooter className='pt-0'>
                <a>
                  <Button color='blue'>Read More</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
          <div className='w-2/3'>
            <Card className='mt-6 dark:bg-primary-dark'>
              <CardBody>
                <Typography
                  variant='h5'
                  color='blue-gray'
                  className='text-2xl font-semibold dark:text-font-dark'
                >
                  Workshops
                </Typography>
                <Typography className='dark:text-font-dark'>
                  We know how hard it can be to learn new skills and
                  technologies apart from those taught in classes. That’s why we
                  host a variety of workshops for different career paths in
                  computer science. In the past we’ve held workshops on
                  preparing for coding interviews, getting familiar with machine
                  learning, and building your own portfolio website.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
