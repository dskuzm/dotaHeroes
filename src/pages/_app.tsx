// Core
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Components
import HeaderComponent from "@/components/header/header";
// Other
import "../styles/globals.css";


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#cdcdcd",
      contrastText: "#cdcdcd",
    },
    secondary: {
      main: "#ff6046",
      contrastText: "#cdcdcd",
    },
    background: {
      default: "#000000",
      paper: "#cdcdcd",
    },
    text: {
      primary: "#cdcdcd",
      secondary: "#cdcdcd",
    },
  },
  typography: {
    fontFamily: '"Goudy Trajan", Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      contrastText: "#ffffff",
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    h5: {
      textTransform: "uppercase",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    body1: {
      fontSize: "1rem",
      color: "#cdcdcd",
    },
    body2: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <HeaderComponent />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
