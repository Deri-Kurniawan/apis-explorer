import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ImdbMovies from "./pages/ImdbMovies";


function App() {
  function Home() {
    return "Hello World";
  }

  function NotFound() {
    return "Page Not Found";
  }
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/imdb-movies">IMDB MOVIES</Link></li>
        </ul>
      </nav>
      <main>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/imdb-movies" element={<ImdbMovies/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
