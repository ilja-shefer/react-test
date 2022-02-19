import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './pages/About';
import Article from './pages/Article';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/post/:id" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h2>Вход</h2>} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem', textAlign: 'center' }}>
              <p>Страница отсутсвует</p>
            </main>
          }
        />
      </Routes>
      <br />
      <br />
      <Footer />
      <br />
      <br />
    </div>
  );
}

export default App;
