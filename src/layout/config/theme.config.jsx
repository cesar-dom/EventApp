import { createTheme as createMuiTheme } from '@mui/material/styles';

import mergeDeep from '../../utils/mergeDeep';
import pipe from '../../utils/pipe';

export const theme = {
    spacing: 4,
    palette: {
        green: {
            300: '#00B37E',
            500: '#00875F',
            700: '#015F43',
        },
        blue: {
            500: '#81D8F7',
        },
        orange: {
            500: '#FBA94C',
        },
        red: {
            500: '#F75A68',
        },
        gray: {
            100: '#E1E1E6',
            200: '#C4C4CC',
            300: '#8D8D99',
            500: '#323238',
            600: '#29292E',
            700: '#121214',
            900: '#09090A'
        },
        pink: '#fd00e8'
    },
    // typography: {
    //     fontFamily: ['Roboto, sans-serif'],
    //     fontWeigth: 400,
    //     fontSize: 14,
    //     lineHeight: '100%',
    //     color: '#fff'
    // },
    shape: {
        borderRadius: 4,
    },
    // overrides: {
    //   MUIRichTextEditor: {},
    // },
};

const mergeTheme = (customTheme) => mergeDeep(theme, customTheme);
export const createTheme = pipe(mergeTheme, createMuiTheme);

export default theme;
