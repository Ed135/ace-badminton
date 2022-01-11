import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          marginTop: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          <b>Badminton</b>
        </Typography>
        <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
          A sweet as game for some cool people to play on mobile!
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
