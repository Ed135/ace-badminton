import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

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
        <Box component="img" alt="ACE Badminton Club" sx={{ display: { xs: 'none', sm: 'flex' }, width: '60%'}} src="/AceLogoWhite.svg" />
        <Box component="img" alt="ACE Badminton Club" sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%'}} src="/AceLogoWhite.svg" />
        <Divider />
        <Paper sx={{ padding: 3, margin: 4 }}>
          <Typography component="p" textAlign="center" gutterBottom>
            Bournemouth run badminton club. We play casually on Wednesdays, for all levels, Beginner through to Expert!
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Wednesday - 7-9pm - Harewood School</b>
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Turning up on the night - <b>£5.50</b> - Memebership <b>£42</b> per quarter <i>(Jan - March, ...)</i>
          </Typography>
        </Paper> 
      </Box>
    </Container>
  );
};

export default Home;
