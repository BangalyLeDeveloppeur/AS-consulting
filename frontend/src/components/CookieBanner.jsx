import React, { useEffect, useState } from "react";
import { setCookie, getCookie } from "../utils/Cookis.js";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    setCookie("cookie_consent", "accepted");
    setVisible(false);
  };

  const refuseCookies = () => {
    setCookie("cookie_consent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        As-consulting utilise des cookies pour assurer le bon fonctionnement du
        site et améliorer votre expérience de navigation.
      </p>

      <div className="buttons">
        <button onClick={acceptCookies}>Accepter</button>
        <button onClick={refuseCookies}>Refuser</button>
      </div>
    </div>
  );
};

export default CookieBanner;