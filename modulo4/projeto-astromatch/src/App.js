import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/ProfilesContext";
import Home from "./pages/Home";
import Matchs from "./pages/Matchs";

function App() {
  return (
    <div>
      <ProfileProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/matchs"} element={<Matchs />} />
          </Routes>
        </BrowserRouter>
      </ProfileProvider>
    </div>
  );
}

export default App;
