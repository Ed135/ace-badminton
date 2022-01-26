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
        <Typography variant="h3" component="h3" textAlign="center" gutterBottom>
          Additional Info
        </Typography>
        <Paper sx={{ padding: 3, margin: 3 }}>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Contact Details</b>
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Ace Badminton Email: <b><a href="mailto:someone@yoursite.com" target="_blank" rel="noreferrer">acebadminton@dummy.com</a></b> 
          </Typography>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3 }}>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Where we play?</b>
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Roys Moore Sports Hall<br />Bournemouth BH7 6NY 
          </Typography>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3 }}>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Payment Details</b>
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            <b>Sort Code</b>: 12 34 56<br /><b>Account Number</b>: 12345678 
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Info;
