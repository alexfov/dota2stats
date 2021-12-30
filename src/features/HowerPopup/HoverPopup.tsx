import React from 'react';
import { TMatch } from '_app/features/Games/types';

interface Props {
  dayGames: TMatch[];
}

export function HoverPopup({ dayGames }: Props) {
  return <div className="table__popup"></div>;
}
