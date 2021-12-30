import React from 'react';
import { chain, times } from 'lodash';
import dayjs from 'dayjs';
import { TMatch } from '_app/features/Games/types';
import { useAppSelector } from '_app/core/redux';
import { isPlayerWon } from '_app/utils';
import { Cell } from '_app/features/Table/__cell';

interface Props {
  player: string;
  playerGames: { [key: string]: TMatch[] };
  daysCount: number;
}

export function Row({ player, playerGames, daysCount }: Props) {
  const date = useAppSelector((state) => state.settings.selectedDate);
  const playerGamesByMonth = playerGames[date];
  const playerGamesByDay = chain(playerGamesByMonth)
    .map((game) => ({ ...game, date_str: dayjs.unix(game.start_time).format('YYYY-MM-DD') }))
    .groupBy('date_str')
    .value();
  let monthWins = 0;
  let monthLoses = 0;
  let winRate = Math.round((monthWins / (monthWins + monthLoses)) * 100);
  return (
    <tr key={player} className="table__row">
      <td className="table__cell">{player}</td>
      {times(daysCount, (i) => {
        const day = ('0' + String(i + 1)).slice(-2);
        const dayGames = playerGamesByDay[date + `-${day}`];
        if (!dayGames) return <td key={day} className="table__cell" />;
        let wins = 0,
          loses = 0;
        for (const dayGame of dayGames) {
          const isWon = isPlayerWon(dayGame);
          if (isWon) {
            wins++;
            monthWins++;
          } else {
            loses++;
            monthLoses++;
          }
          winRate = Math.round((monthWins / (monthWins + monthLoses)) * 100);
        }
        return <Cell wins={wins} loses={loses} key={day} dayGames={dayGames} />;
      })}
      <td className="table__cell table__cell_bold">
        <span className="table__win">{monthWins || ''}</span>
      </td>
      <td className="table__cell table__cell_bold">
        <span className="table__lose">{monthLoses || ''}</span>
      </td>
      <td className="table__cell table__cell_bold">
        <span className={winRate >= 50 ? 'table__win' : 'table__lose'}>{winRate || ''}</span>
      </td>
    </tr>
  );
}
