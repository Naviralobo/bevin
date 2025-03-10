import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "'Itim', cursive",
  },
  palette: {
    primary: {
      main: "#1976d2", 
    },
    secondary: {
      main: "#f50057", 
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
