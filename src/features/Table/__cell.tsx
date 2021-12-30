import React, { useState } from 'react';
import { HoverPopup } from '_app/features/HowerPopup/HoverPopup';
import { TMatch } from '_app/features/Games/types';

interface Props {
  wins: number;
  loses: number;
  dayGames: TMatch[];
}

export function Cell({ wins, loses, dayGames }: Props) {
  const [showPopup, setShowPopup] = useState(false);
  const onMouseEnter = () => setShowPopup(true);
  const onMouseLeave = () => setShowPopup(false);
  return (
    <td className="table__cell" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <span className="table__win">{wins || ''}</span>
      <span className="table__lose">{loses || ''}</span>
      {showPopup && <HoverPopup dayGames={dayGames} />}
    </td>
  );
}
