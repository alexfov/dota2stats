import React from 'react';
import cancer from '../../assets/img/cancer.svg';
import { playersArr } from '_app/constatnts';
interface Props {}

export function Footer({}: Props) {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={cancer} alt="logo" className="page-footer__logo" />
          </div>
          <div className="col-2">
            <nav className="footer-nav">
              <ul className="footer-menu nav flex-column">
                <li className="footer-menu__item main-menu__item_bold pl-0">
                  <a href="https://www.dotabuff.com/" className="main-menu__link">
                    DOTABUFF
                  </a>
                </li>
                {playersArr.map(([name, id]) => (
                  <li className="footer-menu__item" key={id}>
                    <a href={`https://www.dotabuff.com/players/${id}`} className="main-menu__link">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
