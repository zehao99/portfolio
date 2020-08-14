import React, { useState } from "react";
import styles from "./NavbarWide.module.scss";
import { NavLink } from "react-router-dom";
import SubNav from "./SubNav";
const NavbarWide = (props) => {
  const [content, setContent] = useState(props.navContent);

  const HoverHandlerEnter = (id) => {
    setContent((prevState) => {
      prevState.map((e) => {
        if (e.id === id) {
          e.show = true;
        }
      });
      return [...prevState];
    });
  };

  const HoverHandlerLeave = (id) => {
    setContent((prevState) => {
      prevState.map((e) => {
        if (e.id === id) {
          e.show = false;
        }
      });
      return [...prevState];
    });
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <h1>
          <a href="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo-light-light.png`} />
          </a>
        </h1>
        <div className={styles.navbarLinks}>
          {content.map((e) => {
            return (
              <div
                key={e.id}
                className={styles.navbarElement}
                onMouseEnter={HoverHandlerEnter.bind(this, e.id)}
                onMouseLeave={HoverHandlerLeave.bind(this, e.id)}
              >
                <div className={styles.navbarLink}>
                  {e.isExternalLink ? (
                    <a className={styles.btn} href={e.url}>
                      {e.id}
                    </a>
                  ) : (
                    <NavLink to={e.url} className={styles.btn}>
                      {e.id}
                    </NavLink>
                  )}
                </div>
                <SubNav show={e.show} content={e.content} isRight={e.isRight} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarWide;
