import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import './Layout.css';

const theme = createTheme({
    status: {
        danger: blue[500],
    },
});

export default function Layout({ children }) {
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
                {children}
            </main>
        </ThemeProvider>
    );
}