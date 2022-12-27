import React from 'react';
import Colors from './Colors';
import Popup from './PopupAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
    const showPopHandle = () => {
        Popup.show({
            message: 'Building',
            title: 'Contact Email',
        });
    };

    return (
        <div className="footer-container">
            <div className="sns-icons">
                <a href="https://www.instagram.com/zehao99/">
                    <FontAwesomeIcon
                        className="social-media-icon"
                        icon={faInstagram}
                        size="2x"
                    />
                </a>
                {/* Pop Out a Contact Form */}
                <a onClick={showPopHandle}>
                    <FontAwesomeIcon
                        className="social-media-icon"
                        icon={faEnvelope}
                        size="2x"
                    />
                </a>
                <a href="https://www.linkedin.com/in/zehao-li-49ab9615b/">
                    <FontAwesomeIcon
                        className="social-media-icon"
                        icon={faLinkedin}
                        size="2x"
                    />
                </a>
                <a href="https://github.com/zehao99">
                    <FontAwesomeIcon
                        className="social-media-icon"
                        icon={faGithub}
                        size="2x"
                    />
                </a>
                <p>Zehao Li, 2022 &copy; all rights reserved.</p>
            </div>
            <style>{`
        .footer-container {
          text-align: center;
        }
        .footer-container .sns-icons {
          margin-top: 1em;
        }
        .footer-container .sns-icons a {
          padding: 0 1em;
          color: ${Colors.primaryColorComplimentary};
          transition: all 0.3s ease-in-out;
        }

        .footer-container .sns-icons a:hover {
          color: ${Colors.lightTextColorComplimentary};
        }

        .footer-container p {
          padding: 1em;
        }
        .footer-container .social-media-icon {
          cursor: pointer;
        }
        
        @media(min-width:1200px) {
            .footer-container {
                font-size: MIN(1.33vw, 17px);
            }
        }
      `}</style>
        </div>
    );
};

export default Footer;
