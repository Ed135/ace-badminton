import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* This Box with sx is allowing for a change in image size based on screen size given 60% is too small for mobile */}
        <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'none', sm: 'flex' }, width: '60%'}} src="/AceLogoWhite.svg" />
        <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%'}} src="/AceLogoWhite.svg" />
        <Divider />
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
          About Us
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            We are a Bournemouth-based badminton club who play casually on Wednesdays for all levels, beginner through to expert!
          </Typography>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Where To Find Us
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Wednesdays 7-9pm at Roy Moore Sports Hall, Avonbourne Academy, Bournemouth, Dorset, BH7 6NY
          </Typography>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          How To Hear From Us
        </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Sign up to our <Button variant="text" href="http://eepurl.com/hSuZbn">Mailing List</Button> to ensure
            you don&apos;t miss out on our updates, membership options and events!
          </Typography>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
            How To Join
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Show up on a Wednesday evening! We offer two membership options; ad hoc and block booking.
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Ad Hoc</b> membership is a pay-as-you-go model. We charge <b>£6.00</b> per session, with payment taken at club night via bank transfer or card.
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Block Booking</b> membership is a quarterly payment model, where you pay at a discounted rate of £3.50 per session for 3 months of sessions up-front.
            This up-front cost will be calculated each quarter, and is usually <b>£45.50</b> which covers 13 weeks of sessions.
             See our <Link href="/block"><a>Block Booking</a></Link> page for more information.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Home;
