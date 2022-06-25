import { Global, ThemeProvider } from '@emotion/react';
import { StyledEngineProvider as StylesProvider } from '@mui/material/styles';

import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, theme } from './theme.config';

import GlobalStyle from '../GlobalStyle';

const Theme = ({ children }) => {
    const myTheme = createTheme(theme);

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={myTheme}>
                <Global styles={GlobalStyle} />
                <CssBaseline />
                <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
};

export default Theme;
