import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { axiosConfig, baseURL } from "../constants";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(baseURL, axiosConfig)
      .then((response) => setProfile(response.data.profile))
      .catch((err) => console.error(err));
  };

  return (
    <ProfileContext.Provider value={[profile, getProfile]}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
