import React from "react";
import "./footer.scss";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>© {date.getFullYear()} Silontong - Online Platform</p>
    </footer>
  );
};

export default Footer;
