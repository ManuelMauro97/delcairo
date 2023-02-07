import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FFFFFF'
        },
        error: {
            main: red.A400
        }
    },
    overrides: {
        MuiCardMedia: {
            blurred: {
                filter: 'blur(5px)',
                opacity: 0.5,
            }
        }
    }
});
