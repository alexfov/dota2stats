import React from 'react';
import cancer from '../../assets/img/cancer.svg';
import { MAIN_ROUTE, players, playersArr } from '_app/constatnts';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-11">
            <nav className="main-nav">
              <ul className="main-menu nav">
                <li className="main-menu__item main-menu__item_bold">
                  <a href="https://www.dotabuff.com/" className="main-menu__link">
                    DOTABUFF
                  </a>
                </li>
                {playersArr.map(([name, id]) => (
                  <li className="main-menu__item" key={id}>
                    <Link to={`/${MAIN_ROUTE}/${name.toLowerCase()}`} className="main-menu__link">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-1">
            <a href={`/${MAIN_ROUTE}`}>
              <img src={cancer} alt="logo" className="page-header__logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
