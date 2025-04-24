import { useEffect, useState } from 'react';
import bandeau from '/images/la-depeche-animale-bandeau-ssecrits-zoom.png';

import '../styles/Header.scss';

const Header = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [showNotInstallableMessage, setShowNotInstallableMessage] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice =
      /iphone|ipad|ipod/.test(userAgent) &&
      !window.matchMedia('(display-mode: standalone)').matches;

    setIsIos(isIosDevice);

    let promptTriggered = false;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
      promptTriggered = true;
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Au bout de 5 secondes, si rien ne s'est déclenché, afficher un message
    const timeout = setTimeout(() => {
      if (!promptTriggered && !isIosDevice) {
        setShowNotInstallableMessage(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timeout);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => {
      setDeferredPrompt(null);
      setShowInstallButton(false);
    });
  };

  return (
    <header className="header">
      <img src={bandeau} alt="Bandeau La Dépêche Animale" className="header__bandeau" />
      <h1 className="header__title">La Dépêche Animale</h1>

      {showNotInstallableMessage && (
        <p className="header__install-warning">
          ⚠️ Votre navigateur ne permet pas l’installation de cette application, ou bien les conditions PWA ne sont pas encore réunies.
          Veuillez utiliser un navigateur compatible (Chrome, Edge, Brave…) avec une connexion sécurisée (HTTPS).
        </p>
      )}

      {isIos && !showInstallButton && (
        <p className="header__install-ios">
          📱 Sur iPhone ou iPad, pour ajouter cette application à votre écran d’accueil :
          touchez le bouton <strong>“Partager”</strong> puis <strong>“Ajouter à l’écran d’accueil”</strong>.
        </p>
      )}

      <nav className="header__nav">
        <a href="/">Accueil</a>
        <a href="/contact">Contact</a>
        <a href="/rgpd">RGPD</a>
      </nav>
    </header>
  );
};

export default Header;
