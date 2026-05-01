import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import { RideStoreProvider } from './store/rideStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter prevents 404 on GitHub Pages refresh/deep links. */}
    <HashRouter>
      <RideStoreProvider>
        <App />
      </RideStoreProvider>
    </HashRouter>
  </React.StrictMode>
);
