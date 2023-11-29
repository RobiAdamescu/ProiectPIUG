import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './Components/DarkModeContext';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import QandA from './Pages/QandA';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/qa" element={<QandA />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
