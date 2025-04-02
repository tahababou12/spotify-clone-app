import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Play, Pause, Clock, MoreHorizontal, Heart } from 'lucide-react';
import { songs } from '../data/mockData';
import { Song } from '../types';
import { usePlayer } from '../context/PlayerContext';
import { formatTime } from '../utils/formatTime';
import TopBar from './TopBar';

const ArtistPage: React.FC = () => {
  const { artistName } = useParams<{ artistName: string }>();
  const [artistSongs, setArtistSongs] = useState<Song[]>([]);
  const [monthlyListeners, setMonthlyListeners] = useState<number>(0);
  const { currentSong, isPlaying, playSong, togglePlayPause, setPlaylistSongs } = usePlayer();
  
  useEffect(() => {
    // Filter songs by the artist name
    const filteredSongs = songs.filter(song => 
      song.artist.toLowerCase() === decodeURIComponent(artistName || '').toLowerCase()
    );
    
    setArtistSongs(filteredSongs);
    
    // Set these songs as the current playlist
    if (filteredSongs.length > 0) {
      setPlaylistSongs(filteredSongs);
    }
    
    // Generate random monthly listeners (for mock data)
    setMonthlyListeners(Math.floor(Math.random() * 9000000) + 1000000);
  }, [artistName, setPlaylistSongs]);
  
  const handlePlayAll = () => {
    if (artistSongs.length > 0) {
      playSong(artistSongs[0]);
    }
  };
  
  const isArtistPlaying = isPlaying && currentSong && 
    currentSong.artist.toLowerCase() === decodeURIComponent(artistName || '').toLowerCase();
  
  // Get artist image from the first song
  const artistImage = artistSongs.length > 0 ? artistSongs[0].coverUrl : '';
  
  const formatListeners = (num: number) => {
    return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 1 }).format(num);
  };
  
  return (
    <div className="flex flex-col min-h-full">
      <TopBar />
      
      {/* Artist Header */}
      <div 
        className="flex flex-col justify-end p-8 bg-gradient-to-b from-purple-900 to-black"
        style={{ minHeight: '40vh' }}
      >
        <div className="flex items-end gap-6">
          <img 
            src={artistImage} 
            alt={artistName} 
            className="w-48 h-48 object-cover rounded-full shadow-2xl"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold">Artist</span>
            <h1 className="text-7xl font-bold mb-4">{artistName}</h1>
            <p className="text-sm text-gray-300">{formatListeners(monthlyListeners)} monthly listeners</p>
          </div>
        </div>
      </div>
      
      {/* Actions Bar */}
      <div className="flex items-center gap-6 p-6">
        <button 
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-400 transition-colors`}
          onClick={() => isArtistPlaying ? togglePlayPause() : handlePlayAll()}
        >
          {isArtistPlaying ? <Pause size={24} /> : <Play size={24} fill="white" className="ml-1" />}
        </button>
        
        <button className="flex items-center justify-center w-10 h-10 text-white hover:text-green-500 transition-colors">
          <Heart size={28} />
        </button>
        
        <button className="flex items-center justify-center w-10 h-10 text-white hover:text-green-500 transition-colors">
          <MoreHorizontal size={28} />
        </button>
      </div>
      
      {/* Songs Table */}
      <div className="px-6 pb-20">
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        
        <div className="grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-2 text-sm text-gray-400 border-b border-gray-800">
          <div className="flex items-center justify-center">#</div>
          <div>Title</div>
          <div>Album</div>
          <div className="flex justify-end">
            <Clock size={16} />
          </div>
        </div>
        
        {artistSongs.map((song, index) => {
          const isCurrentSong = currentSong?.id === song.id;
          
          return (
            <div 
              key={song.id}
              className={`grid grid-cols-[16px_4fr_2fr_1fr] gap-4 px-4 py-3 text-sm text-gray-400 hover:bg-white hover:bg-opacity-10 rounded-md transition-colors ${isCurrentSong ? 'text-green-500' : ''}`}
              onClick={() => isCurrentSong ? togglePlayPause() : playSong(song)}
            >
              <div className="flex items-center justify-center">
                {isCurrentSong && isPlaying ? (
                  <Pause size={14} />
                ) : (
                  index + 1
                )}
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
                </div>
              </div>
              
              <div className="flex items-center">{song.album}</div>
              
              <div className="flex items-center justify-end gap-4">
                <button 
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to favorites logic
                  }}
                >
                  <Heart size={16} />
                </button>
                <div>{formatTime(song.duration)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistPage;
