import { HelloWorld } from "../src/components/HelloWorld";
import { StyleProvider, ThemePicker } from "vcc-ui";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <HelloWorld />
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
