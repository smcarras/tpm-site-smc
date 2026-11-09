import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portal from './pages/Portal';
import PoliticalConsultants from './pages/PoliticalConsultants';
import NewMedia from './pages/NewMedia';
import AgentsAndTalent from './pages/AgentsAndTalent';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'portal':
        return <Portal onNavigate={handleNavigate} />;
      case 'political':
        return <PoliticalConsultants onNavigate={handleNavigate} />;
      case 'newmedia':
        return <NewMedia onNavigate={handleNavigate} />;
      case 'agents':
        return <AgentsAndTalent onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
