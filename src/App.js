import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LeftBar from "./components/LeftBar/LeftBar";
import Player from "./components/Player/Player";
import Home from "./feature/Home/Home";
import Playlist from "./feature/Playlist/Playlist";
import SongDetail from "./feature/SongDetail/SongDetail";
import ZingChartPage from "./feature/ZingChartPage/ZingChartPage";
function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="content__left">
          <LeftBar />
          <Player />
        </div>
        <div className="right">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/song/:songID" element={<SongDetail />} />
            <Route path="/playlist/:title/:id" element={<Playlist />} />
            <Route path="/zing-chart" element={<ZingChartPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
