import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__horizontal" />
      <p className="footer__txt">
        ©2022 Agrilin, a <span style={{ color: "green" }}>Growcoms</span>{" "}
        company. All rights reserved. Various trademarks held by their
        respective owners.
      </p>
    </div>
  );
};

export default Footer;
