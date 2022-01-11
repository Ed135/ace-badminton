import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Paper from '@mui/material/Paper';
import Link from '../components/Link';

export default function FixedBottomNavigation(props: { children: any}) {
  const { children } = props;

  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7, display: { xs: 'block', sm: 'none' } }} ref={ref}>
      <CssBaseline />
      {children}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} href="/" />
          <BottomNavigationAction label="Org" icon={<PeopleIcon />} component={Link} href="/organisation" />
          <BottomNavigationAction label="Teams" icon={<GroupsIcon />} component={Link} href="/teams" />
          <BottomNavigationAction label="Info" icon={<HelpCenterIcon />} component={Link} href="/info" />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
