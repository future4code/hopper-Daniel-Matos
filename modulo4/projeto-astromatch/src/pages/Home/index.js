import { useNavigate } from "react-router-dom";
// import { Container, ContainerMatch } from "../../styles";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import Profile from "./components/Profile";

function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xs">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Astromatch
          </Typography>
          <Button onClick={() => navigate("/matchs")} color="red">
            Matches
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Profile />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
