import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Info: NextPage = () => {

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
        <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'none', sm: 'flex' }, width: '60%'}} src="/AceLogoWhite.svg" />
        <Box component="img" alt="Ace Badminton Club" sx={{ display: { xs: 'flex', sm: 'none' }, width: '100%'}} src="/AceLogoWhite.svg" />
        <Divider />
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
          2022 Draft Block Booking Schedule
          </Typography>
          <Typography component="p" textAlign="center" gutterBottom>
            Below are the draft dates and prices for our upcoming quarterly block booking schedule.
            If you would like to join as a block booking member, please email <b><a href="mailto:ace.dorset@gmail.com" target="_blank" rel="noreferrer">ace.dorset@gmail.com</a></b> for our bank account details.
          </Typography>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <Item>Q1: 9th February - 30th March (8 weeks)</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>£28.00</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Q2: 6th April - 29th June (13 weeks)</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>£45.50</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Q3: 6th July - 28th September (13 weeks)</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>£45.50</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>Q4: 5th October - 21st December (12 weeks)</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>£42.00</Item>
          </Grid>
        </Grid>
        </Paper>
        <Paper sx={{ padding: 3, margin: 3, bgcolor: '#DAECDD', width: '100%' }}>
          <Typography variant="h5" textAlign="center" gutterBottom>
          Block Booking FAQs
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Can I be reminded when to pay for a new block booking quarter?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes - ensure you have signed up to our <Button variant="text"><a href="http://eepurl.com/hSuZbn">Mailing List</a></Button> and we will email
                about two weeks before the new block starts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Is there a deadline for when I need to pay for the block booking quarter?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                There will be a deadline set in the email, which will usually be the first date of the new quarter. Failure to pay by the date may mean you have to
                pay the ad-hoc fee of £6 per session.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>I want to pay for block booking but I know I'm going to be away for part of the quarter. Can I get a discount?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Unfortunately we do not offer discounts on our block booking fee. If you know that you won't be able to attend some sessions, we recommend
                that you calculate whether paying the ad-hoc fee of £6 per week will be cheaper for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>I'm new to the club and I'd like to join as a block booking member but it is currently part of the way through a quarter.
              Can I still join?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes - if you are a new member to the club then we recommend you pay the ad-hoc fee of £6 on your first session. If you'd still like to join the
                block booking membership after this then we will charge you the block booking fee for the remaining weeks.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>I've paid my block booking fee but I now cannot play due to unforeseen circumstances. Can I get a refund?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We will allow refunds only if the player has moved away from the area or the player has been injured and is no longer able to play.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </Container>
  );
};

export default Info;
