import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// creates themes and styles to use in rest of app
const theme = createTheme({
    typography: {
        fontFamily: "'Lato', sans-serif",
        button: {
            fontFamily: "'Roboto', sans-serif",
        },
    },
    palette: {
        primary: {
            main: "#8E44AD",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
        secondary: {
            main: "#85C1E9",
        },
    },
});

export default responsiveFontSizes(theme);
