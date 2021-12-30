import React, { useEffect, useMemo, useState } from 'react';
import { Graph } from '_app/features/Graph/Graph';

interface Props {
  player: string;
  id: number;
}

export function PlayerScreen({ player, id }: Props) {
  return <Graph player={player} id={id} />;
}
