import { useNavigate } from "react-router-dom";
// import { Container, ContainerMatch } from "../../styles";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Profile from "./Profile";

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
      <Profile />
    </Container>
  );
}

export default Home;
