import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

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
        <Paper sx={{ padding: 3, margin: 2 }}>
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
