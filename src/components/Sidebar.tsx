import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music } from 'lucide-react';
import { playlists } from '../data/mockData';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 w-64 flex-shrink-0 h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white mb-8">
          <Music size={32} className="text-green-500" />
          <span className="text-xl font-bold">Spotify</span>
        </div>
        
        <nav className="mb-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-4 text-white hover:text-white transition py-2">
                <Home size={24} />
                <span className="font-semibold">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 hover:text-white transition py-2">
                <Search size={24} />
                <span className="font-semibold">Search</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 hover:text-white transition py-2">
                <Library size={24} />
                <span className="font-semibold">Your Library</span>
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="pt-4 border-t border-gray-800 mb-6">
          <div className="flex items-center gap-4 hover:text-white transition py-2 cursor-pointer">
            <div className="bg-gray-800 rounded-md p-1">
              <PlusSquare size={20} />
            </div>
            <span className="font-semibold">Create Playlist</span>
          </div>
          <div className="flex items-center gap-4 hover:text-white transition py-2 cursor-pointer">
            <div className="bg-gradient-to-br from-purple-600 to-blue-400 rounded-md p-1">
              <Heart size={20} className="text-white" />
            </div>
            <span className="font-semibold">Liked Songs</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-4">
          <h3 className="text-sm uppercase font-bold text-gray-400 mb-4">Playlists</h3>
          <ul className="space-y-2">
            {playlists.map(playlist => (
              <li key={playlist.id}>
                <a href="#" className="text-sm hover:text-white transition py-1 block truncate">
                  {playlist.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
