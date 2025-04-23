import { useEffect, useState } from "react";
import '../styles/CookieConsent.scss';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
    if (value === "accepted") {
      // Déclenchez ici vos scripts d’analyse / pub
      console.log("Cookies activés !");
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience utilisateur.
        Vous pouvez accepter ou refuser le dépôt de cookies.
      </p>
      <div className="cookie-actions">
        <button onClick={() => handleConsent("accepted")}>Tout accepter</button>
        <button onClick={() => handleConsent("refused")}>Tout refuser</button>
      </div>
    </div>
  );
};

export default CookieConsent;
