import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import {store} from "./core/redux";
import {Header} from "./features/Header/Header";
import {TitleSVG} from "./features/TitleSVG/TitleSVG";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="lineDrawing" className="heading-container">
                <TitleSVG />
              </div>
            </div>
            <div className="col-12">
              <div className="content__item">
                <div className="table-btns-group">
                  <select name="year" id="year" className="select select-year">
                  </select>
                  <select name="month" id="month" className="select select-month">
                    <option value="01">Январь</option>
                    <option value="02">Февраль</option>
                    <option value="03">Март</option>
                    <option value="04">Апрель</option>
                    <option value="05">Май</option>
                    <option value="06">Июнь</option>
                    <option value="07">Июль</option>
                    <option value="08">Август</option>
                    <option value="09">Сентябрь</option>
                    <option value="10">Октябрь</option>
                    <option value="11">Ноябрь</option>
                    <option value="12">Декабрь</option>
                  </select>
                  <button className="btn button-show-table btn-light">ПОКАЗАТЬ</button>
                </div>
                <div className="table-container">
                  <table className="table">
                    <thead className="table__header">
                    <tr className="table__row">
                      <td className="table__cell table__month" colSpan={35}>Происходит загрузка данных...</td>
                    </tr>
                    <tr className="table__row table__row_border-bold">
                      <td className="table__cell table__cell_empty"></td>
                      <td className="table__cell">1</td>
                      <td className="table__cell">2</td>
                      <td className="table__cell">3</td>
                      <td className="table__cell">4</td>
                      <td className="table__cell">5</td>
                      <td className="table__cell">6</td>
                      <td className="table__cell">7</td>
                      <td className="table__cell">8</td>
                      <td className="table__cell">9</td>
                      <td className="table__cell">10</td>
                      <td className="table__cell">11</td>
                      <td className="table__cell">12</td>
                      <td className="table__cell">13</td>
                      <td className="table__cell">14</td>
                      <td className="table__cell">15</td>
                      <td className="table__cell">16</td>
                      <td className="table__cell">17</td>
                      <td className="table__cell">18</td>
                      <td className="table__cell">19</td>
                      <td className="table__cell">20</td>
                      <td className="table__cell">21</td>
                      <td className="table__cell">22</td>
                      <td className="table__cell">23</td>
                      <td className="table__cell">24</td>
                      <td className="table__cell">25</td>
                      <td className="table__cell">26</td>
                      <td className="table__cell">27</td>
                      <td className="table__cell">28</td>
                      <td className="table__cell">29</td>
                      <td className="table__cell">30</td>
                      <td className="table__cell">31</td>
                      <td className="table__cell table__cell_win">W</td>
                      <td className="table__cell table__cell_lose">L</td>
                      <td className="table__cell table__cell_winrate">WR</td>
                    </tr>
                    </thead>
                    <tbody className="table__body">

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg className="wave-pattern" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1922 96">
          <title>footer-wave</title>
          <path
            d="M1920.5,68.5s-300.07,28.28-180-68C1669.21,8,1668,68.5,751,96.5c-198.47-21.88-427-21-497.5-18-156.72-1.5-255,18-255,18h1922"
            transform="translate(1.5 -0.5)"/>
        </svg>
      </section>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img src="img/cancer.svg" alt="logo" className="page-footer__logo" />
            </div>
            <div className="col-2">
              <nav className="footer-nav">
                <ul className="footer-menu nav flex-column">
                  <li className="footer-menu__item main-menu__item_bold pl-0"><a href="https://www.dotabuff.com/"
                                                                                 className="main-menu__link">DOTABUFF</a>
                  </li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/102756891"
                                                       className="main-menu__link">Neeeeeef</a></li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/41528404"
                                                       className="main-menu__link">JohnGalt</a></li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/313885294"
                                                       className="main-menu__link">AlexFov</a></li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/120491980"
                                                       className="main-menu__link">BloOdTerrOr</a></li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/84502939"
                                                       className="main-menu__link">Megabit</a></li>
                  <li className="footer-menu__item"><a href="https://www.dotabuff.com/players/254920273"
                                                       className="main-menu__link">Doctor</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </Provider>
  );
}

export default App;
