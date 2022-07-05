import { useEffect, useState } from "react";
import { getProfile, chooseProfile } from "../../api";
import {
  Button,
  Stack,
  ImageListItem,
  ImageListItemBar,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material/";

import { Favorite, Close } from "@mui/icons-material";

function Profile() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    newProfile();
  }, []);

  const newProfile = () => {
    getProfile().then((profile) => {
      if (profile) setProfile(profile);
      else setProfile(null);
    });
  };

  const buttonChooseProfile = (profile, choose) => {
    chooseProfile(profile.id, choose);
    setProfile();
    newProfile();
  };

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      {profile !== null ? (
        <>
          {profile ? (
            <Stack spacing={2} justifyContent="center" alignItems="center">
              <ImageListItem key={1}>
                <img
                  src={profile.photo}
                  srcSet={profile.photo}
                  alt={"item.title"}
                  loading="lazy"
                  style={{ height: 300 }}
                />
                <ImageListItemBar
                  title={`${profile.name}, ${profile.age}`}
                  subtitle={profile.bio}
                />
              </ImageListItem>

              <Stack direction="row" spacing={5}>
                <Button
                  variant="contained"
                  onClick={() => buttonChooseProfile(profile, false)}
                >
                  <Close color="gray" fontSize="large" />
                </Button>
                <Button
                  variant="contained"
                  onClick={() => buttonChooseProfile(profile, true)}
                >
                  <Favorite color="red" fontSize="large" />
                </Button>
              </Stack>
            </Stack>
          ) : (
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
          )}
        </>
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
          Acabou
        </Typography>
      )}
    </Box>
  );
}

export default Profile;
