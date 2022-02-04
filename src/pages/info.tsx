import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Info: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      {/* This Box with sx is allowing for a change in image size based on screen size given 60% is too small for mobile */}
      <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'none', sm: 'flex' }, width: '60%'}} src="/AceLogoWhite.svg" />
      <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%'}} src="/AceLogoWhite.svg" />
        <Typography variant="h3" component="h3" textAlign="center" gutterBottom>
          Information
        </Typography>
        <Paper sx={{ padding: 3, margin: 3 }}>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Contact Details</b>
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Ace Badminton Club email: <b><a href="mailto:ace.dorset@gmail.com" target="_blank" rel="noreferrer">ace.dorset@gmail.com</a></b>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Info;
