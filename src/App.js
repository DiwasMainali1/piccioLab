import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import People from './components/People';
import Research from './components/Research';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '/piccioLab' : '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="font-inter flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
            <Route 
              path="/people" 
              element={<People />} 
            />
            <Route 
              path="/research" 
              element={<Research />} 
            />
            <Route 
              path="/media" 
              element={<Media />} 
            />
            <Route 
              path="/contact" 
              element={<Contact />} 
            />
            {/* Catch all route - redirects to home */}
            <Route 
              path="*" 
              element={<Navigate to="/" replace />} 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;