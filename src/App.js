import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ClubSelector from './ClubSelector';
import Sidebar from './Sidebar';
import TopCoursesWorld from './TopCoursesWorld';
import TopCoursesQuebec from './TopCoursesQuebec';
import Leaderboard from './Leaderboard';
import './App.css';

function App() {
  const [category, setCategory] = useState('caddySystem');

  const renderContent = () => {
    switch (category) {
      case 'topCoursesWorld':
        return <TopCoursesWorld />;
      case 'topCoursesQuebec':
        return <TopCoursesQuebec />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <ClubSelector />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar onSelectCategory={setCategory} />
      <div className="main-content">
        <Header />
        <main>{renderContent()}</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;






