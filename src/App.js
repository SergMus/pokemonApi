import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import PokemonPage from "./pages/PokemonPage/PokemonPage";
import Header from "./components/Header";
import GroupPage from "./pages/SortedPages/GroupPage";
import DescPage from "./pages/SortedPages/DescPage";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/pokemon/:id" element={<PokemonPage />}></Route>
          <Route path="/group" element={<GroupPage />}></Route>
          <Route path="/desc" element={<DescPage />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
