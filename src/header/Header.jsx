import React, { useState } from 'react';
import { FaSun, FaMoon, FaBars, FaRobot } from 'react-icons/fa';
import './header.css';
import ChatbotOverlay from '../overlay/Overlay'; // Import des ChatbotOverlay

const Header = ({ toggleTheme, isDarkMode, onCategoryChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleCategoryMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setMenuOpen(false);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <header className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="icon-links">
        <div className='menu-chatbot-icon'>
        {/* Menü-Icon */}
        <div onClick={toggleCategoryMenu} className="menu-icon">
          <FaBars />
        </div>

        {/* Chatbot-Icon */}
        <div onClick={toggleChatbot} className="chatbot-icon">
          <FaRobot />
        </div>
        </div>
        {/* Kategorie-Menü */}
        <div className={`category-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#category1" className="category-item" onClick={() => handleCategoryClick('a')}>Safety</a>
          <a href="#category2" className="category-item" onClick={() => handleCategoryClick('b')}>Presence</a>
          <a href="#category3" className="category-item" onClick={() => handleCategoryClick('c')}>Allowing</a>
          <a href="#category4" className="category-item" onClick={() => handleCategoryClick('d')}>Tracing</a>
          <a href="#category5" className="category-item" onClick={() => handleCategoryClick('e')}>Re-experiencing</a>
          <a href="#category6" className="category-item" onClick={() => handleCategoryClick('f')}>Expression</a>
          <a href="#category7" className="category-item" onClick={() => handleCategoryClick('g')}>Connection</a>
          <a href="#category8" className="category-item" onClick={() => handleCategoryClick('h')}>Comfort</a>
          <a href="#category9" className="category-item" onClick={() => handleCategoryClick('i')}>Perspective</a>
          <a href="#category10" className="category-item" onClick={() => handleCategoryClick('j')}>Integration</a>
          <a href="#category11" className="category-item" onClick={() => handleCategoryClick('k')}>Peace</a>
          <a href="#category12" className="category-item" onClick={() => handleCategoryClick('l')}>Closure</a>
         
          







          {/* Andere Kategorien */}
        </div>

        {/* Theme-Icon */}
        <div onClick={toggleTheme} className="theme-icon">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </div>

      {/* ChatbotOverlay */}
      <ChatbotOverlay isOpen={isChatbotOpen} onClose={toggleChatbot} />
    </header>
  );
};

export default Header;
