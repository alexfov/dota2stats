export interface THero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: 'str' | 'int' | 'agi';
  attack_type: 'Melee' | 'Ranged';
  roles: string[];
}
