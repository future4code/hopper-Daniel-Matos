import { useEffect, useState } from "react";
import { getProfile, chooseProfile } from "../../../../api";

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
              <button onClick={() => buttonChooseProfile(profile, true)}>
                Sim
              </button>
              <button onClick={() => buttonChooseProfile(profile, false)}>
                Não
              </button>
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
