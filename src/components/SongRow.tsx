import React from 'react';
import { Play, Pause, MoreHorizontal } from 'lucide-react';
import { Song } from '../types';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatTime';
import { Link } from 'react-router-dom';

interface SongRowProps {
  song: Song;
  index: number;
}

const SongRow: React.FC<SongRowProps> = ({ song, index }) => {
  const { currentSong, isPlaying, playSong, togglePlayPause, addToQueue } = usePlayer();
  
  const isCurrentSong = currentSong?.id === song.id;
  
  const handlePlayClick = () => {
    if (isCurrentSong) {
      togglePlayPause();
    } else {
      playSong(song);
    }
  };
  
  const handleAddToQueue = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToQueue(song);
  };
  
  return (
    <div 
      className={`grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 text-sm text-gray-400 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors ${isCurrentSong ? 'text-green-500' : ''} group`}
      onClick={handlePlayClick}
    >
      <div className="flex items-center justify-center">
        <div className="group-hover:hidden">{index + 1}</div>
        <button className="hidden group-hover:block">
          {isCurrentSong && isPlaying ? (
            <Pause size={14} />
          ) : (
            <Play size={14} />
          )}
        </button>
      </div>
      
      <div className="flex items-center gap-3 min-w-0">
        <img 
          src={song.coverUrl} 
          alt={song.title} 
          className="w-10 h-10 object-cover rounded"
        />
        <div className="min-w-0">
          <div className={`font-medium truncate ${isCurrentSong ? 'text-green-500' : 'text-white'}`}>
            {song.title}
          </div>
          <Link 
            to={`/artist/${encodeURIComponent(song.artist)}`}
            className="truncate hover:underline hover:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {song.artist}
          </Link>
        </div>
      </div>
      
      <div className="flex items-center">{song.album}</div>
      
      <div className="flex items-center justify-end gap-4">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            className="text-gray-400 hover:text-white"
            onClick={handleAddToQueue}
            title="Add to queue"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>
        <div>{formatTime(song.duration)}</div>
      </div>
    </div>
  );
};

export default SongRow;
