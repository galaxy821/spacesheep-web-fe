import React from "react";
import { ThemeProvider } from "styled-components";
import RouteInfo from "./Route";
import { GlobalTheme, theme } from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalTheme />
      <div className="App">
        <RouteInfo></RouteInfo>
      </div>
    </ThemeProvider>
  );
}

export default App;
