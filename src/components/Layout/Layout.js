import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import { Outlet } from 'react-router-dom';

import './Layout.css';

const theme = createTheme({
    status: {
        danger: blue[500],
    },
});

export default function Layout() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Tasks Management
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}