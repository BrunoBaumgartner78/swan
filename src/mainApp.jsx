// src/MainApp.jsx
import React, { useState } from 'react';
import Header from './header/Header';
import CategoryContent from './contentPage/ContentPage';
import MenuList from './menuList/MenuList';
import './App.css';

function MainApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState('a');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <CategoryContent activeCategory={activeCategory} />
      <MenuList />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} onCategoryChange={handleCategoryChange} />
     
     
    </div>
  );
}

export default MainApp;
