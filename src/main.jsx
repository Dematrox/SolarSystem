import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { SolarSystemRoutes } from './routes/SolarSystemRoutes';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <SolarSystemRoutes/>
    </HashRouter>
  </React.StrictMode>
)
