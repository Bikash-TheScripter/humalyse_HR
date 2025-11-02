import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A4F7A",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#13B1A5",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f7fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#16233A",
      secondary: "#5A6B7F",
    },
    divider: "rgba(19, 177, 165, 0.16)",
  },
  typography: {
    fontFamily:
      '"Plus Jakarta Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 28,
          paddingBlock: 12,
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "transparent",
      },
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(16px)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingInline: 16,
          "@media (min-width: 600px)": {
            paddingInline: 32,
          },
        },
      },
    },
  },
});

export default theme;
