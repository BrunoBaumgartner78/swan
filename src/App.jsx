import React, { useState } from 'react';
import MainApp from './mainApp'; // Die Haupt-App-Komponente
import Bot from './chatbot/Chatbot'; // Die Chatbot-Komponente
import Header from './header/Header'; // Die Header-Komponente

function App() {
  const [isChatbotActive, setIsChatbotActive] = useState(false); // Zustand für den Chatbot

  const toggleChatbot = () => {
    setIsChatbotActive(prevState => !prevState); // Zustand umkehren
  };

  return (
    <div>
      <Header
        toggleTheme={() => {}}
        isDarkMode={false}
        onCategoryChange={() => {}}
        toggleChatbot={toggleChatbot}
        isChatbotActive={isChatbotActive}
      />
      {isChatbotActive ? <Bot /> : <MainApp />} {/* Wechsel zwischen Haupt-App und Chatbot */}
    </div>
  );
}

export default App;
