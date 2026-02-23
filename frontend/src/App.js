import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Linkedin, AtSign } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex items-center justify-between px-8 py-4">
        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center gap-12 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className={`text-black no-underline text-base font-medium hover:opacity-70 transition-opacity ${
                  isActive('/') ? 'font-bold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-black no-underline text-base font-medium hover:opacity-70 transition-opacity ${
                  isActive('/about') ? 'font-bold' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`text-black no-underline text-base font-medium hover:opacity-70 transition-opacity ${
                  isActive('/portfolio') ? 'font-bold' : ''
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-black no-underline text-base font-medium hover:opacity-70 transition-opacity ${
                  isActive('/contact') ? 'font-bold' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
          >
            <div className="absolute top-1 left-1 w-10 h-10 rounded-lg" style={{ backgroundColor: '#E3E3FF' }}></div>
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3E3FF' }}>
              <Linkedin className="w-5 h-5 text-black" />
            </div>
          </a>
          <a
            href="mailto:contact@example.com"
            className="relative"
          >
            <div className="absolute top-1 left-1 w-10 h-10 rounded-lg" style={{ backgroundColor: '#E3E3FF' }}></div>
            <div className="relative w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E3E3FF' }}>
              <AtSign className="w-5 h-5 text-black" />
            </div>
          </a>
        </div>
      </div>
      <div className="w-full h-0.5 bg-black"></div>
    </header>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
