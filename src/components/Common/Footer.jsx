import React from 'react';
import Colors from '../../styles/Colors';
import Popup from './PopupAlert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faInstagram,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  
  p {
    padding: 1em;
  }

  .social-media-icon {
    cursor: pointer;
  }

  @media(min-width:1200px) {
    font-size: MIN(1.33vw, 17px);
  }
`

const SnsIcons = styled.div`
  margin-top: 1em;
  
  a {
    padding: 0 1em;
    color: ${Colors.primaryColorComplimentary};
    transition: all 0.3s ease-in-out;
    
    &:hover {
      color: ${Colors.lightTextColorComplimentary};
    }
  }
`

const Footer = () => {
    const showPopHandle = () => {
        Popup.show({
            message: 'Building',
            title: 'Contact Email',
        });
    };

    return (
        <FooterContainer >
            <SnsIcons >
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
                <p>Zehao Li, 2023 &copy; all rights reserved.</p>
            </SnsIcons>
        </FooterContainer>
    );
};

export default Footer;
