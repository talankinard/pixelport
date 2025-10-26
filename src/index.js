import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import './css/index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Deals from './pages/Deals';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact'


export default function App()
{
  return (
    <BrowserRouter basename= {process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element = {<Layout />}>
            <Route index element={<Navigate to="home" replace />} />

            <Route path="home" element={<Home />} />
            <Route path = "browse" element = {<Browse />}/>
            <Route path = "deals" element = {<Deals />}/>
            <Route path = "news" element = {<News />}/>
            <Route path = "faq" element = {<FAQ />}/>
            <Route path = "contact" element = {<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
