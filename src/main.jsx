import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import "boxicons";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
