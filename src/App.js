import "./App.css";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage/HomePage";
import Auth from "./pages/AuthPage/Auth";


import MusicsPage from "./pages/Musics/MusicsPage";
import PlayListDetails from "./pages/PlayListDetails/PlayListDetails";
import PlayList from "./pages/playList/playList";

function App() {
  return (

    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/musics" element={<MusicsPage />} />
          <Route path="/playlists" element={<PlayList />} />
          <Route path="/playlists/:id" element={<PlayListDetails />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
