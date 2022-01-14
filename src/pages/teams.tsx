import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

interface TeamCardProps {
  teamMembers: string[];
  teamName: string
  division: string
}

const menTeams = [
  {teamMembers: ['Ed', 'Matt', 'Paul', 'Dan'], teamName: 'Mens Ace 1', division: 'Mens League 1'},
  {teamMembers: ['placeholder'], teamName: 'Mens Ace 2', division: 'Mens League 3'},
  {teamMembers: ['placeholder'], teamName: 'Mens Ace 3', division: 'Mens League 4'},
  {teamMembers: ['placeholder'], teamName: 'Mens Ace 4', division: 'Mens League 5'}
]

const mixedTeams = [
  {teamMembers: ['Anne-Marie', 'Christine', 'Rae', 'Hayley', 'Jen', 'Royce', 'Ed', 'Matt'], teamName: 'Mixed Ace 1', division: 'Mixed Dorset League 1'}
]

function TeamCard(props: TeamCardProps) {
  const { teamMembers, teamName, division } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {division}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {teamName}
        </Typography>
        {
         teamMembers.map((teamMember: string) => {
           return (
             <li key={teamMember}>{teamMember}</li>
           )
         }) 
        }
      </CardContent>
    </Card>
  );
}

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
          Teams
        </Typography>
        <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
          <b>Mens</b>
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          {menTeams.map(team => {
            return (
              <Grid key={team.teamName} item xs={12} md={3} style={{ margin: '12px 12px' }}>
                <TeamCard teamMembers={team.teamMembers} teamName={team.teamName} division={team.division} />
              </Grid>
            )
          })}
        </Grid>
        <Typography variant="h5" component="h3" textAlign="center" gutterBottom>
          <b>Mixed</b>
        </Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          {mixedTeams.map(team => {
            return (
              <Grid key={team.teamName} item xs={12} md={3} style={{ margin: '12px 12px' }}>
                <TeamCard teamMembers={team.teamMembers} teamName={team.teamName} division={team.division} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Info;
