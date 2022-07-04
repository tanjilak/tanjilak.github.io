import React from "react";
import {StrictMode} from 'react';

import {createRoot} from 'react-dom/client';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Nav,
  App,
  Designs,
  Software,
} from "./components";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/software" element={<Software />} />
    
      
    </Routes>
  </Router>,
);