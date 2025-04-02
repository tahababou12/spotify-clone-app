import { Playlist, Song, UserProfile } from '../types';

export const currentUser: UserProfile = {
  name: 'John Doe',
  imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
};

export const songs: Song[] = [
  {
    id: '1',
    title: 'Dreams',
    artist: 'Benjamin Tissot',
    album: 'Bensound Originals',
    duration: 170,
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3'
  },
  {
    id: '2',
    title: 'Acoustic Breeze',
    artist: 'Benjamin Tissot',
    album: 'Bensound Acoustics',
    duration: 166,
    coverUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3'
  },
  {
    id: '3',
    title: 'Sunny',
    artist: 'Benjamin Tissot',
    album: 'Bensound Jazzy',
    duration: 141,
    coverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3'
  },
  {
    id: '4',
    title: 'Tenderness',
    artist: 'Benjamin Tissot',
    album: 'Bensound Acoustics',
    duration: 182,
    coverUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3'
  },
  {
    id: '5',
    title: 'Once Again',
    artist: 'Benjamin Tissot',
    album: 'Bensound Acoustics',
    duration: 204,
    coverUrl: 'https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3'
  },
  {
    id: '6',
    title: 'Creative Minds',
    artist: 'Benjamin Tissot',
    album: 'Bensound Corporate',
    duration: 174,
    coverUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3'
  },
  {
    id: '7',
    title: 'Jazzy Frenchy',
    artist: 'Benjamin Tissot',
    album: 'Bensound Jazzy',
    duration: 105,
    coverUrl: 'https://images.unsplash.com/photo-1619961602105-16fa2a5465c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3'
  },
  {
    id: '8',
    title: 'Ukulele',
    artist: 'Benjamin Tissot',
    album: 'Bensound Folk',
    duration: 146,
    coverUrl: 'https://images.unsplash.com/photo-1620316462488-8c3422f6bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3'
  },
  {
    id: '9',
    title: 'Happy Rock',
    artist: 'Benjamin Tissot',
    album: 'Bensound Rock',
    duration: 105,
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3'
  },
  {
    id: '10',
    title: 'Buddy',
    artist: 'Benjamin Tissot',
    album: 'Bensound Folk',
    duration: 122,
    coverUrl: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    audioUrl: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3'
  }
];

export const playlists: Playlist[] = [
  {
    id: '1',
    name: 'Acoustic Favorites',
    description: 'Relaxing acoustic tunes to unwind',
    coverUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(0, 4)
  },
  {
    id: '2',
    name: 'Chill Vibes',
    description: 'Relaxing tunes to help you unwind',
    coverUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(2, 6)
  },
  {
    id: '3',
    name: 'Upbeat & Positive',
    description: 'Happy tunes to lift your mood',
    coverUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(4, 8)
  },
  {
    id: '4',
    name: 'Jazz Collection',
    description: 'Smooth jazz for any occasion',
    coverUrl: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(1, 5)
  },
  {
    id: '5',
    name: 'Focus Flow',
    description: 'Music to help you concentrate',
    coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(3, 7)
  },
  {
    id: '6',
    name: 'Mood Booster',
    description: 'Feel-good tracks to lift your spirits',
    coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    songs: songs.slice(0, 8)
  }
];

export const recentlyPlayed = songs.slice(0, 6);
export const featuredPlaylists = playlists.slice(0, 4);
export const recommendedForYou = songs.slice(2, 8);
