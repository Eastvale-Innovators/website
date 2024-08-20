import {
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
  CardFooter,
  Button
} from '@material-tailwind/react'

export default function ThreeCardSplit () {
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
                  Mission{' '}
                </Typography>
                <Typography className='dark:text-font-dark'>
                  Our goal is to foster an inclusive and supportive environment
                  for students interested in computer-related majors, with a
                  focus on skill development beyond the classroom. Through
                  cultivating abilities outside traditional academic settings,
                  we aim to create a professional atmosphere that empowers
                  students in their educational pursuits.
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
                  Get Involved
                </Typography>
                <Typography className='dark:text-font-dark'>
                  That's great! To be more involved, click on our linktree and
                  follow us discord and instagram to stay updated about our
                  events. If you have any questions, don't hesitate to contact
                  us!
                </Typography>
                <div className='pt-2'>
                  <Button className=''>Join Now</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <Card className='mt-6'>
  <CardBody>
    <Typography variant='h5' color='blue-gray' className='mb-2'>
      UI/UX Review Check
    </Typography>
    <Typography>
      The place is close to Barceloneta Beach and bus stop just 2
      min by walk and near to &quot;Naviglio&quot; where you can
      enjoy the main night life in Barcelona.
    </Typography>
  </CardBody>
  </Card> */
}
