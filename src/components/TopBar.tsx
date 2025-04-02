import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../data/mockData';

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    const mainContent = document.querySelector('.overflow-y-auto');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  return (
    <div className={`sticky top-0 z-10 flex items-center justify-between p-4 transition-colors ${scrolled ? 'bg-[#121212]' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-70"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black bg-opacity-70"
          onClick={() => navigate(1)}
        >
          <ChevronRight size={20} />
        </button>
        
        <div className="ml-4 relative hidden md:flex items-center">
          <Search size={20} className="absolute left-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#242424] text-white pl-10 pr-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-black rounded-full px-2 py-1 hover:bg-gray-800 transition-colors">
          <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
            <User size={14} />
          </div>
          <span className="text-sm font-medium">{currentUser.name}</span>
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

const ChevronDown = (props: any) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default TopBar;
