import React from "react";
import Colors from "./Colors";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sns-icons">
        <a href="https://www.instagram.com/zehao99/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        {/* Pop Out a Contact Form */}
        <a href="#">
          <i className="far fa-envelope fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/zehao-li-49ab9615b/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <p>Zehao Li, 2020 &copy; all rights reserved.</p>
      </div>
      <style jsx>{`
        .footer-container {
          text-align: center;
        }
        .footer-container .sns-icons {
          margin-top: 1rem;
        }
        .footer-container .sns-icons a {
          padding: 0 1rem;
          color: ${Colors.primaryColorComplimentary};
          transition: all 0.3s ease-in-out;
        }

        .footer-container .sns-icons a:hover {
          color: ${Colors.lightTextColorComplimentary};
        }

        .footer-container p {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Footer;
