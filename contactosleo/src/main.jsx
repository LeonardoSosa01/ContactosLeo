import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './componentes/Header/Header.jsx';
import App from './App.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);
