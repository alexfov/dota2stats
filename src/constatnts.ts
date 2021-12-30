import _ from 'lodash';

export const players: { [key: string]: number } = {
  Neeeeeerf: 102756891,
  JohnGalt: 41528404,
  AlexFov: 313885294,
  Doctor: 254920273,
  Megabit: 84502939,
  BloOdTerrOr: 120491980,
  AlexFov2: 353648896,
};

export const playersArr = _.toPairs(players);

export const MAIN_ROUTE = 'dota2stats';
