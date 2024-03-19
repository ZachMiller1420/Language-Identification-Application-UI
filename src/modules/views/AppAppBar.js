import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between', background: "#000000" }}>
            <Box sx={{ flex: 1 }}>
                <Link 
                  href= 'https://github.com/ZachMiller1420/Language-Identification-Application'variant="h6"
                  underline="none"
                  color="#9C27B0"
                  sx={{ fontSize: 24, background: "#000000"}}
                  >
                    {'Language Detection NLP Model'}
                </Link>
            </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;