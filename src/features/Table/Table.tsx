import React from 'react';
import { TitleSVG } from '_app/features/TitleSVG/TitleSVG';
import { useAppSelector } from '_app/core/redux';
import dayjs from 'dayjs';
import { chain, times, toPairs } from 'lodash';
import { TMatch } from '_app/features/Games/types';
import { Row } from '_app/features/Table/__row';

interface Props {}

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export function Table({}: Props) {
  const date = useAppSelector((state) => state.settings.selectedDate);
  const matches = useAppSelector((state) => state.games.matches);
  const daysCount = dayjs(date).daysInMonth();
  return (
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
              <select name="year" id="year" className="select select-year"></select>
              <select name="month" id="month" className="select select-month">
                {months.map((month, i) => (
                  <option value={i + 1}>{month}</option>
                ))}
              </select>
              <button className="btn button-show-table btn-light">ПОКАЗАТЬ</button>
            </div>
            <div className="table-container">
              <table className="table">
                <thead className="table__header">
                  <tr className="table__row">
                    <td className="table__cell table__month" colSpan={35}>
                      Происходит загрузка данных...
                    </td>
                  </tr>
                  <tr className="table__row table__row_border-bold">
                    <td className="table__cell table__cell_empty" />
                    {times(daysCount, (i) => (
                      <td className="table__cell">{i + 1}</td>
                    ))}
                    <td className="table__cell table__cell_win">W</td>
                    <td className="table__cell table__cell_lose">L</td>
                    <td className="table__cell table__cell_winrate">WR</td>
                  </tr>
                </thead>
                <tbody className="table__body">
                  {toPairs(matches).map(([player, playerGames]) => {
                    return <Row player={player} playerGames={playerGames} daysCount={daysCount} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
