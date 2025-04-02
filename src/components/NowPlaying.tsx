import React, { useEffect, useState } from 'react';
import { Heart, SkipBack, Play, Pause, SkipForward, Repeat, Repeat1, Shuffle, Volume2, Maximize2, ListMusic } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatTime';

const NowPlaying: React.FC = () => {
  const { 
    currentSong, 
    isPlaying, 
    volume, 
    progress, 
    repeatMode,
    shuffleMode,
    togglePlayPause, 
    setVolume, 
    setProgress,
    nextSong,
    prevSong,
    toggleRepeat,
    toggleShuffle
  } = usePlayer();

  const [isSeeking, setIsSeeking] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  // Handle seeking
  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeekValue(Number(e.target.value));
  };

  const handleSeekEnd = () => {
    setProgress(seekValue);
    setIsSeeking(false);
  };

  // Update seek value when progress changes (if not currently seeking)
  useEffect(() => {
    if (!isSeeking) {
      setSeekValue(progress);
    }
  }, [progress, isSeeking]);

  if (!currentSong) {
    return null;
  }

  const progressPercentage = currentSong.duration > 0 
    ? ((isSeeking ? seekValue : progress) / currentSong.duration) * 100 
    : 0;

  return (
    <div className="bg-black bg-opacity-95 border-t border-gray-900 text-white py-3 px-4 flex items-center justify-between">
      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/4">
        <div className="w-14 h-14 flex-shrink-0">
          <img 
            src={currentSong.coverUrl} 
            alt={currentSong.title} 
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-semibold truncate">{currentSong.title}</h4>
          <p className="text-xs text-gray-400 truncate">{currentSong.artist}</p>
        </div>
        <button className="text-gray-400 hover:text-white transition">
          <Heart size={16} />
        </button>
      </div>
      
      {/* Player Controls */}
      <div className="flex flex-col items-center w-2/4">
        <div className="flex items-center gap-6 mb-2">
          <button 
            className={`${shuffleMode ? 'text-green-500' : 'text-gray-400'} hover:text-white transition`}
            onClick={toggleShuffle}
            title="Shuffle"
          >
            <Shuffle size={18} />
          </button>
          <button 
            className="text-gray-400 hover:text-white transition"
            onClick={prevSong}
            title="Previous"
          >
            <SkipBack size={18} />
          </button>
          <button 
            className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
            onClick={togglePlayPause}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <button 
            className="text-gray-400 hover:text-white transition"
            onClick={nextSong}
            title="Next"
          >
            <SkipForward size={18} />
          </button>
          <button 
            className={`${repeatMode !== 'off' ? 'text-green-500' : 'text-gray-400'} hover:text-white transition`}
            onClick={toggleRepeat}
            title={`Repeat ${repeatMode}`}
          >
            {repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
          </button>
        </div>
        
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-gray-400 w-10 text-right">
            {formatTime(isSeeking ? seekValue : progress)}
          </span>
          <div className="relative flex-1 h-1 bg-gray-600 rounded-full overflow-hidden group">
            <div 
              className="absolute h-full bg-white group-hover:bg-green-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
            <input 
              type="range" 
              min="0" 
              max={currentSong.duration} 
              value={isSeeking ? seekValue : progress}
              onMouseDown={handleSeekStart}
              onTouchStart={handleSeekStart}
              onChange={handleSeekChange}
              onMouseUp={handleSeekEnd}
              onTouchEnd={handleSeekEnd}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="text-xs text-gray-400 w-10">
            {formatTime(currentSong.duration)}
          </span>
        </div>
      </div>
      
      {/* Extra Controls */}
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <button className="text-gray-400 hover:text-white transition">
          <ListMusic size={18} />
        </button>
        <button className="text-gray-400 hover:text-white transition">
          <Maximize2 size={18} />
        </button>
        <div className="flex items-center gap-2 w-32">
          <Volume2 size={18} className="text-gray-400" />
          <div className="relative flex-1 h-1 bg-gray-600 rounded-full overflow-hidden group">
            <div 
              className="absolute h-full bg-white group-hover:bg-green-500 rounded-full"
              style={{ width: `${volume * 100}%` }}
            ></div>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="absolute w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
