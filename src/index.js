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
            <Route index element={<Navigate to="Home" replace />} />
            <Route path="home" element={<Navigate to="Home" replace />} />


            <Route path="Home" element={<Home />} />
            <Route path = "Browse" element = {<Browse />}/>
            <Route path = "Deals" element = {<Deals />}/>
            <Route path = "News" element = {<News />}/>
            <Route path = "FAQ" element = {<FAQ />}/>
            <Route path = "Contact" element = {<Contact />}/>

            <Route path="*" element={<Navigate to="Home" replace />} />
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
