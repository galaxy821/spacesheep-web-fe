import React from "react";
import { ThemeProvider } from "styled-components";
import RouteInfo from "./pages/Route";
import { GlobalTheme, theme } from "./style/theme";

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
