import { Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contemporary from "./Components/Contemporary";
import PageContent from "./Components/PageContent";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Contemporary />
      <PageContent />
    </Fragment>
  );
}

export default App;
