import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#11cb5f",
    },
    gray: {
      main: "#64748B",
      contrastText: "#fff",
    },
    red: {
      main: red[500],
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
