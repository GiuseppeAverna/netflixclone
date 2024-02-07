import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./Components/MyNav";
import { Gallery } from "./Components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVshows from "./Components/Tvshows";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        <header>
          <MyNav></MyNav>
        </header>
        <Routes>
          <main>
            <Route element={<Gallery />} path="/" />
            <Route element={<TVshows />} path="/tv-shows" />
            <Route element={<MovieDetails />} path="/moviedetails/movieId" />
          </main>
        </Routes>
        <footer></footer>
      </>
    </BrowserRouter>
  );
}

export default App;
