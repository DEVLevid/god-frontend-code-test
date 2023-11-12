import { HomeComponent } from "../src/components/homeComponent";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <HomeComponent />
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
