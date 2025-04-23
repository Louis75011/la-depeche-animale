import bandeau from '/images/la-depeche-animale-bandeau-ssecrits-zoom.png';

import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <img src={bandeau} alt="Bandeau La Dépêche Animale" className="header__bandeau" />
    <h1 className="header__title">La Dépêche Animale</h1>
    <nav className="header__nav">
      <a href="/">Accueil</a>
      <a href="/contact">Contact</a>
      <a href="/rgpd">RGPD</a>
    </nav>
  </header>
);

export default Header;
