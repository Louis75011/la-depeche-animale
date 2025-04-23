import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import RGPD from './pages/RGPD';
import CookieConsent from './components/CookieConsent';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App = () => (
  <Router>
    <Header />
    <CookieConsent />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rgpd" element={<RGPD />} />
        {/* Autres routes CONTACT */}
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
