import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMatches, clearMatches } from "../../api";
import Match from "./Match";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  List,
  Box,
  CircularProgress,
} from "@mui/material";

function Matches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getMatches().then((matches) => {
      setMatches(matches);
      setLoading(false);
    });
  }, []);

  const buttonClearMatches = () => {
    clearMatches();
    setMatches([]);
  };

  const renderMatches = () => {
    return (
      <div>
        {matches.length > 0 ? (
          <List sx={{ mb: 2 }}>
            {matches.map((match) => (
              <Match key={match.id} match={match} />
            ))}
          </List>
        ) : (
          <>
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress color="red" />
              </Box>
            ) : (
              <Typography
                variant="h6"
                component="div"
                sx={{
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                Nenhum Match
              </Typography>
            )}
          </>
        )}
      </div>
    );
  };

  return (
    <Container maxWidth="xs">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Astromatch
          </Typography>
          <Button onClick={() => buttonClearMatches()} color="red">
            Limpar
          </Button>
          <Button onClick={() => navigate("/")} color="red">
            Home
          </Button>{" "}
        </Toolbar>
      </AppBar>
      {renderMatches()}
    </Container>
  );
}

export default Matches;
