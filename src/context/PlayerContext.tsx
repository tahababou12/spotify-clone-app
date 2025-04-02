import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from 'react';
import { Song } from '../types';
import { songs } from '../data/mockData';

interface PlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  progress: number;
  repeatMode: 'off' | 'all' | 'one';
  shuffleMode: boolean;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlayPause: () => void;
  setVolume: (volume: number) => void;
  setProgress: (progress: number) => void;
  nextSong: () => void;
  prevSong: () => void;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
  queue: Song[];
  addToQueue: (song: Song) => void;
  playlistSongs: Song[];
  setPlaylistSongs: (songs: Song[]) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.7);
  const [progress, setProgressState] = useState(0);
  const [queue, setQueue] = useState<Song[]>([]);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  const [shuffleMode, setShuffleMode] = useState(false);
  const [playlistSongs, setPlaylistSongs] = useState<Song[]>(songs);
  const [songHistory, setSongHistory] = useState<Song[]>([]);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongIndexRef = useRef<number>(-1);
  
  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Update current song index when song changes
  useEffect(() => {
    if (currentSong) {
      const index = playlistSongs.findIndex(song => song.id === currentSong.id);
      currentSongIndexRef.current = index;
    }
  }, [currentSong, playlistSongs]);
  
  // Handle song changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (currentSong?.audioUrl) {
      audioRef.current.src = currentSong.audioUrl;
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setProgressState(0);
    }
  }, [currentSong]);
  
  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  
  // Handle progress updates and song end
  useEffect(() => {
    if (!audioRef.current) return;
    
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setProgressState(audioRef.current.currentTime);
      }
    };
    
    const handleEnded = () => {
      if (repeatMode === 'one') {
        // Repeat the current song
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(error => {
            console.error("Error replaying audio:", error);
          });
        }
      } else {
        nextSong();
      }
    };
    
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    audioRef.current.addEventListener('ended', handleEnded);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [repeatMode]);
  
  const playSong = (song: Song) => {
    if (currentSong) {
      setSongHistory(prev => [...prev, currentSong]);
    }
    setCurrentSong(song);
    setIsPlaying(true);
    setProgressState(0);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  const setProgress = (newProgress: number) => {
    setProgressState(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = newProgress;
    }
  };

  const getNextSongIndex = () => {
    if (playlistSongs.length === 0) return -1;
    
    if (shuffleMode) {
      // Get random song that's not the current one
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlistSongs.length);
      } while (randomIndex === currentSongIndexRef.current && playlistSongs.length > 1);
      
      return randomIndex;
    } else {
      // Get next song in order
      const nextIndex = (currentSongIndexRef.current + 1) % playlistSongs.length;
      return nextIndex;
    }
  };

  const nextSong = () => {
    if (queue.length > 0) {
      // Play from queue first if available
      const nextSong = queue[0];
      const newQueue = queue.slice(1);
      if (currentSong) {
        setSongHistory(prev => [...prev, currentSong]);
      }
      setCurrentSong(nextSong);
      setQueue(newQueue);
      setProgressState(0);
    } else if (playlistSongs.length > 0) {
      // Otherwise play next song in playlist
      const nextIndex = getNextSongIndex();
      
      if (nextIndex >= 0) {
        if (currentSong) {
          setSongHistory(prev => [...prev, currentSong]);
        }
        setCurrentSong(playlistSongs[nextIndex]);
        setProgressState(0);
      }
    }
  };

  const prevSong = () => {
    // If we're more than 3 seconds into the song, restart it
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      setProgressState(0);
      return;
    }
    
    // Otherwise go to previous song
    if (songHistory.length > 0) {
      const prevSong = songHistory[songHistory.length - 1];
      setSongHistory(prev => prev.slice(0, -1));
      setCurrentSong(prevSong);
      setProgressState(0);
    } else if (playlistSongs.length > 0) {
      // If no history, go to the last song in the playlist
      const prevIndex = currentSongIndexRef.current > 0 
        ? currentSongIndexRef.current - 1 
        : playlistSongs.length - 1;
      
      setCurrentSong(playlistSongs[prevIndex]);
      setProgressState(0);
    }
  };

  const toggleRepeat = () => {
    setRepeatMode(current => {
      if (current === 'off') return 'all';
      if (current === 'all') return 'one';
      return 'off';
    });
  };

  const toggleShuffle = () => {
    setShuffleMode(current => !current);
  };

  const addToQueue = (song: Song) => {
    setQueue([...queue, song]);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        volume,
        progress,
        repeatMode,
        shuffleMode,
        playSong,
        pauseSong,
        togglePlayPause,
        setVolume,
        setProgress,
        nextSong,
        prevSong,
        toggleRepeat,
        toggleShuffle,
        queue,
        addToQueue,
        playlistSongs,
        setPlaylistSongs,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
