import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
    </Routes>
  </Router>
  );
}

export default App;
