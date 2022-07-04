import { useEffect, useState } from "react";
import { getProfile, chooseProfile } from "../../../../api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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
    <div>
      {profile !== null ? (
        <div>
          {profile ? (
            <div>
              <span>{profile.name}</span>
              <Stack spacing={5} direction="row">
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
            </div>
          ) : (
            "carregando"
          )}
        </div>
      ) : (
        <div>
          <span>Acabou</span>
        </div>
      )}
    </div>
  );
}

export default Profile;
