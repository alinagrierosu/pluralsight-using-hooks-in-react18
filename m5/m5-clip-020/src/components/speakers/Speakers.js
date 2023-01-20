import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import SpeakerMenu from "./SpeakerMenu";
import SpeakersList from "./SpeakersList";
import { SpeakersDataProvider } from "../contexts/SpeakersDataContext";

function Speakers() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "theme-dark" : "theme-light"}>
      <SpeakerMenu />
      <div className="container">
        <div className="row g-4">
          <SpeakersDataProvider>
            <SpeakersList />
          </SpeakersDataProvider>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
