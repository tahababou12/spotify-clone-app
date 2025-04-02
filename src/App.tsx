import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import NowPlaying from './components/NowPlaying';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <Router>
        <div className="flex flex-col h-screen bg-black text-white">
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="flex-1 overflow-y-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/artist/:artistName" element={<ArtistPage />} />
              </Routes>
            </div>
          </div>
          <NowPlaying />
        </div>
      </Router>
    </PlayerProvider>
  );
}

export default App;
