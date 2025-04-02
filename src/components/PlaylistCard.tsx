import React from 'react';
import { Playlist } from '../types';
import { Play } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { Link } from 'react-router-dom';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { playSong, setPlaylistSongs } = usePlayer();
  
  const handlePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (playlist.songs.length > 0) {
      setPlaylistSongs(playlist.songs);
      playSong(playlist.songs[0]);
    }
  };
  
  return (
    <div className="p-4 bg-[#181818] rounded-md hover:bg-[#282828] transition-colors group">
      <div className="relative mb-4">
        <img 
          src={playlist.coverUrl} 
          alt={playlist.name} 
          className="w-full aspect-square object-cover rounded-md shadow-lg"
        />
        <button 
          className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg"
          onClick={handlePlay}
        >
          <Play size={20} fill="black" className="ml-1" />
        </button>
      </div>
      <h3 className="font-bold text-white truncate">{playlist.name}</h3>
      <p className="text-sm text-gray-400 mt-1 line-clamp-2">{playlist.description}</p>
      <div className="mt-2 text-xs text-gray-400">
        {playlist.songs.length > 0 && (
          <Link 
            to={`/artist/${encodeURIComponent(playlist.songs[0].artist)}`}
            className="hover:underline hover:text-white"
          >
            By {playlist.songs[0].artist}
          </Link>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
