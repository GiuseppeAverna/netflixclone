import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import { Gallery } from "./Components/Gallery";

function App() {
  return (
    <>
      <header>
        <MyNav></MyNav>
      </header>
      <main>
        <Gallery></Gallery>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
