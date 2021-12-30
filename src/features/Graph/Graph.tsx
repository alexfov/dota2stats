import React from 'react';
import '../../css/player/player.css';

interface Props {
  player: string;
  id: number;
}

export function Graph({ player }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="graph-btns">
            <button className="graph-btns__btn graph-btns__games active btn">По играм</button>
            <button className="graph-btns__btn graph-btns__wr btn">По винрейту</button>
          </div>
          <div className="svg-container">
            <svg className="svg-graph" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
              <filter id="dropShadow">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                <feOffset dx="8" dy="8" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="dropShadow-circles">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="8" dy="8" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <g className="svg-graph__shadow">
                <line className="svg-graph__axis" x1="25" y1="25" x2="25" y2="475" />
                <line className="svg-graph__axis" x1="25" y1="475" x2="975" y2="475" />
                <path className="svg-graph__axis" d="M20.7,32.3c4.3-1.8,4.3-8.8,4.3-8.8s0,7,4.3,8.8" />
                <path className="svg-graph__axis" d="M968.3,470.7c1.8,4.3,8.8,4.3,8.8,4.3s-7,0-8.8,4.3" />
                <g className="svg-graph__text text">
                  <text x="30" y="30" className="text__item text__item_max" />
                  <text x="30" y="140" className="text__item" />
                  <text x="30" y="250" className="text__item" />
                  <text x="30" y="360" className="text__item" />
                  <text x="30" y="470" className="text__item" />
                </g>
                <g className="svg-graph__text-monthes text-monthes">
                  <text x="70" y="495" className="text__monthes-item">
                    12
                  </text>
                  <text x="145" y="495" className="text__monthes-item">
                    11
                  </text>
                  <text x="220" y="495" className="text__monthes-item">
                    10
                  </text>
                  <text x="295" y="495" className="text__monthes-item">
                    9
                  </text>
                  <text x="370" y="495" className="text__monthes-item">
                    8
                  </text>
                  <text x="445" y="495" className="text__monthes-item">
                    7
                  </text>
                  <text x="520" y="495" className="text__monthes-item">
                    6
                  </text>
                  <text x="595" y="495" className="text__monthes-item">
                    5
                  </text>
                  <text x="670" y="495" className="text__monthes-item">
                    4
                  </text>
                  <text x="745" y="495" className="text__monthes-item">
                    3
                  </text>
                  <text x="820" y="495" className="text__monthes-item">
                    2
                  </text>
                  <text x="895" y="495" className="text__monthes-item">
                    1
                  </text>
                  <text x="935" y="495" className="text__monthes-item">
                    месяц
                  </text>
                </g>
                <polyline className="svg-graph__function" points="" />
              </g>
              <g className="svg-graph__lines">
                <line className="svg-graph__line" x1="15" y1="35" x2="985" y2="35" />
                <line className="svg-graph__line svg-graph__line_wr" x1="15" y1="0" x2="985" y2="0" />
                <line className="svg-graph__line" x1="15" y1="145" x2="985" y2="145" />
                <line className="svg-graph__line" x1="15" y1="255" x2="985" y2="255" />
                <line className="svg-graph__line" x1="15" y1="365" x2="985" y2="365" />
                <line className="svg-graph__line" x1="75" y1="15" x2="75" y2="485" />
                <line className="svg-graph__line" x1="150" y1="15" x2="150" y2="485" />
                <line className="svg-graph__line" x1="225" y1="15" x2="225" y2="485" />
                <line className="svg-graph__line" x1="300" y1="15" x2="300" y2="485" />
                <line className="svg-graph__line" x1="375" y1="15" x2="375" y2="485" />
                <line className="svg-graph__line" x1="450" y1="15" x2="450" y2="485" />
                <line className="svg-graph__line" x1="525" y1="15" x2="525" y2="485" />
                <line className="svg-graph__line" x1="600" y1="15" x2="600" y2="485" />
                <line className="svg-graph__line" x1="675" y1="15" x2="675" y2="485" />
                <line className="svg-graph__line" x1="750" y1="15" x2="750" y2="485" />
                <line className="svg-graph__line" x1="825" y1="15" x2="825" y2="485" />
                <line className="svg-graph__line" x1="900" y1="15" x2="900" y2="485" />
              </g>
              <g className="svg-graph__circles circles" />
            </svg>
            <div className="svg-popup">
              <table className="popup-table">
                <tr className="popup-table__row popup-table__row_date">
                  <th className="popup-table__cell popup-table__set-data" colSpan={2}>
                    ДАТА
                  </th>
                </tr>
                <tr className="popup-table__row popup-table__row_games">
                  <td className="popup-table__cell">Игр сыграно:</td>
                  <td className="popup-table__cell popup-table__set-data" />
                </tr>
                <tr className="popup-table__row popup-table__row_wr">
                  <td className="popup-table__cell">Винрейт:</td>
                  <td className="popup-table__cell popup-table__set-data" />
                </tr>
                <tr className="popup-table__row popup-table__row_favourite-hero">
                  <td className="popup-table__cell">Любимый герой:</td>
                  <td className="popup-table__cell popup-table__set-data" />
                </tr>
                <tr className="popup-table__row popup-table__row_best-hero">
                  <td className="popup-table__cell">Лучший герой:</td>
                  <td className="popup-table__cell  popup-table__set-data" />
                </tr>
                <tr className="popup-table__row popup-table__row_worst-hero">
                  <td className="popup-table__cell">Худший герой:</td>
                  <td className="popup-table__cell popup-table__set-data" />
                </tr>
              </table>
              <svg className="svg-popup__lip" viewBox="0 0 26 18.44" xmlns="http://www.w3.org/2000/svg">
                <path className="svg-popup__lip-path" d="M25.56-0.27c0,0-7.25,13.52-25,18c0-7.81,0-18,0-18" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
