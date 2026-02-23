import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Linkedin, AtSign, Square } from 'lucide-react';
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
                className={`text-gray-600 no-underline text-base font-medium hover:text-black transition-colors ${
                  isActive('/') ? 'text-black font-bold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className={`text-gray-600 no-underline text-base font-medium hover:text-black transition-colors ${
                  isActive('/portfolio') ? 'text-black font-bold' : ''
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-gray-600 no-underline text-base font-medium hover:text-black transition-colors ${
                  isActive('/about') ? 'text-black font-bold' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`text-gray-600 no-underline text-base font-medium hover:text-black transition-colors ${
                  isActive('/contact') ? 'text-black font-bold' : ''
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
            <div className="absolute top-1.5 left-1.5 w-12 h-12 rounded-xl border-2 border-gray-400"></div>
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-blue-600 border-2 border-gray-400">
              <span className="text-white text-lg font-serif font-semibold">in</span>
            </div>
          </a>
          <a
            href="mailto:contact@example.com"
            className="relative"
          >
            <div className="absolute top-1.5 left-1.5 w-12 h-12 rounded-xl border-2 border-gray-400"></div>
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-white border-2 border-gray-400">
              <AtSign className="w-6 h-6 text-black" />
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
