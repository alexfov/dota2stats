import React from "react";

export function Header () {
  return (
    <header className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-11">
            <nav className="main-nav">
              <ul className="main-menu nav">
                <li className="main-menu__item main-menu__item_bold"><a href="https://www.dotabuff.com/"
                                                                        className="main-menu__link">DOTABUFF</a></li>
                <li className="main-menu__item"><a href="neeeeerf.html" className="main-menu__link">Neeeeeef</a></li>
                <li className="main-menu__item"><a href="johngalt.html" className="main-menu__link">JohnGalt</a></li>
                <li className="main-menu__item"><a href="alexfov.html" className="main-menu__link">AlexFov</a></li>
                <li className="main-menu__item"><a href="bloodterror.html" className="main-menu__link">BloOdTerrOr</a>
                </li>
                <li className="main-menu__item"><a href="megabit.html" className="main-menu__link">Megabit</a></li>
                <li className="main-menu__item"><a href="doctar.html" className="main-menu__link">Doctor</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-1">
            <a href="index.html"><img src="img/cancer.svg" alt="logo" className="page-header__logo" /></a>
          </div>
        </div>
      </div>
    </header>
  )
}
