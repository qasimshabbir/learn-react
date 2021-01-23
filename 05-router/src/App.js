import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Shoes } from './components/Shoes';
import { ShoeIndex } from './components/ShoeIndex';
import { NotFound } from './components/NotFound';
import { ShowDetail } from './components/ShowDetail';



function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shoe">Shoes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shoe" element={<Shoes />}>
            <Route path="/" element={<ShoeIndex />} />
            <Route path=':slug' element={<ShowDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
