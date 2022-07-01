import { createContext, useState, useEffect } from "react";
import { getProfile } from "../api";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    changeProfile();
  }, []);

  const changeProfile = () =>
    getProfile().then((profile) => {
      if (profile) setProfile(profile);
    });

  return (
    <ProfileContext.Provider value={[profile, changeProfile]}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
