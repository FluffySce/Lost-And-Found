// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import RecentItems from './components/RecentItems';
import SearchSection from './components/SearchSection';
import MapSection from './components/MapSection';
import ItemDetail from './components/ItemDetail'; // Import the new ItemDetail component
import ReportForm from './components/ReportForm'; // Import the new ReportForm component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/recent-items" element={<RecentItems />} />
            <Route path="/search" element={<SearchSection />} />
            <Route path="/map" element={<MapSection />} />
            <Route path="/item/:id" element={<ItemDetail />} /> {/* Item details route */}
            <Route path="/report" element={<ReportForm />} /> {/* Report form route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
