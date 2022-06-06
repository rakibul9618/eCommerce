import  { createTheme } from "@mui/material";

const MyTheme = createTheme({
    typography: {
        fontFamily: [
            'Cairo',
            'sans-serif'
        ].join(',')
    }
});

export default MyTheme;