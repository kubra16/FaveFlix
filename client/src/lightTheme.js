// lightTheme.js
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffff",
      paper: "#f0f0f0",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    h1: {
      fontSize: "1rem",
      fontWeight: 500,
      color: "#333",
      borderBottom: ".3 rem purple",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#333",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          backgroundColor: purple[500],
          "&:hover": {
            backgroundColor: purple[700],
          },
          marginLeft: ".5rem",
          borderRadius: "10px",
          marginTop: "1rem",
        },
        containedPrimary: {
          color: "white",
          backgroundColor: purple[500],
          "&:hover": {
            backgroundColor: purple[700],
          },
          width: "100%",
        },
        containedSecondary: {
          color: "white",
          backgroundColor: purple[500],
          "&:hover": {
            backgroundColor: purple[700],
          },
        },
      },
    },
    MuiModal: {
      styleOverrides: {},
    },
  },
});

export default lightTheme;
