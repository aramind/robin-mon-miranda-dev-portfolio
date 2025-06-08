import { CssBaseline } from "@mui/material";
import NavBar from "./sections/navbar/NavBar";
import Main from "./layout/Main";
import Spotlight from "./components/Spotlight";

function App() {
  return (
    <>
      <CssBaseline />
      {/* <SpotlightWithSwitch /> */}
      <Spotlight />
      <NavBar />
      <Main />
    </>
  );
}

export default App;
