import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
// import SwipeableTextMobileStepper from '../components/Carousel';

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
    <Box>
      <Grid container direction="row" justifyContent="left" alignItems="left">
        <Grid item xs={12} md={6}>
          <Paper elevation={0} square sx={{ width: '100%', minHeight: '600px', backgroundColor: '#e3f5ff', padding: 3, textAlign: 'center' }}>
            <Typography>hi team 1</Typography>
            <Typography>hi team 1</Typography>
            <Typography>hi team 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} square sx={{ width: '100%', minHeight: '600px', backgroundColor: '#badde3', padding: 3, textAlign: 'center' }}>
            <Typography>hi team 2</Typography>
            <Typography>hi team 2</Typography>
            <Typography>hi team 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} square sx={{ width: '100%', minHeight: '1000px', backgroundColor: '#9db8bd', padding: 3, textAlign: 'center' }}>
            <Typography>hi team 3</Typography>
            <Typography>hi team 3</Typography>
            <Typography>hi team 3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={0} square sx={{ width: '100%', minHeight: '1000px', backgroundColor: '#878787', padding: 3, textAlign: 'center' }}>
            <Typography>hi team 4</Typography>
            <Typography>hi team 4</Typography>
            <Typography>hi team 4</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
