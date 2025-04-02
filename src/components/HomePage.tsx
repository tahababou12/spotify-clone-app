import React from 'react';
import { Clock } from 'lucide-react';
import TopBar from './TopBar';
import PlaylistCard from './PlaylistCard';
import SongRow from './SongRow';
import { playlists, recentlyPlayed, featuredPlaylists, recommendedForYou } from '../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-indigo-900 to-gray-900">
      <TopBar />
      
      <div className="px-8 pb-24">
        {/* Welcome Section */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Good afternoon</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {playlists.slice(0, 6).map(playlist => (
              <div 
                key={playlist.id}
                className="bg-white bg-opacity-10 rounded-md flex items-center overflow-hidden hover:bg-opacity-20 transition group"
              >
                <img 
                  src={playlist.coverUrl} 
                  alt={playlist.name} 
                  className="w-20 h-20 object-cover"
                />
                <h3 className="font-bold px-4">{playlist.name}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Recently Played */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Recently played</h2>
            <a href="#" className="text-sm font-bold text-gray-400 hover:underline">Show all</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6">
            {recentlyPlayed.map(song => (
              <div key={song.id} className="bg-gray-900 rounded-md p-4 hover:bg-gray-800 transition duration-300 group">
                <div className="relative mb-4">
                  <img 
                    src={song.coverUrl} 
                    alt={song.title} 
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                </div>
                <h3 className="font-bold text-white truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 mt-1 truncate">{song.artist}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Featured Playlists */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Featured Playlists</h2>
            <a href="#" className="text-sm font-bold text-gray-400 hover:underline">Show all</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {featuredPlaylists.map(playlist => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </section>
        
        {/* Copyright-Free Music */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Copyright-Free Music</h2>
            <div className="text-sm text-gray-400">
              Music provided by <a href="https://www.bensound.com/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">Bensound.com</a>
            </div>
          </div>
          
          <div className="bg-gray-900 bg-opacity-60 rounded-md overflow-hidden">
            <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-3 border-b border-gray-800 text-sm font-medium text-gray-400">
              <div className="text-center">#</div>
              <div>Title</div>
              <div>Album</div>
              <div className="flex justify-end">
                <Clock size={16} />
              </div>
            </div>
            
            <div className="py-2">
              {recommendedForYou.map((song, index) => (
                <SongRow key={song.id} song={song} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
