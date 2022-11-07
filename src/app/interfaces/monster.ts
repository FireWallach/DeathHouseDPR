export interface Speed {
  walk: string;
  swim: string;
}

export interface Proficiency2 {
  index: string;
  name: string;
  url: string;
}

export interface Proficiency {
  value: number;
  proficiency: Proficiency2;
}

export interface Senses {
  darkvision: string;
  passive_perception: number;
}

export interface DcType {
  index: string;
  name: string;
  url: string;
}

export interface Dc {
  dc_type: DcType;
  dc_value: number;
  success_type: string;
}

export interface SpecialAbility {
  name: string;
  desc: string;
  dc: Dc;
}

export interface Action2 {
  action_name: string;
  count: number;
  type: string;
}

export interface DcType2 {
  index: string;
  name: string;
  url: string;
}

export interface Dc2 {
  dc_type: DcType2;
  dc_value: number;
  success_type: string;
}

export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export interface Damage {
  damage_type: DamageType;
  damage_dice: string;
}

export interface Usage {
  type: string;
  times: number;
}

export interface Action {
  name: string;
  multiattack_type: string;
  desc: string;
  actions: Action2[];
  attack_bonus?: number;
  dc: Dc2;
  damage: Damage[];
  usage: Usage;
}

export interface DamageType2 {
  index: string;
  name: string;
  url: string;
}

export interface Damage2 {
  damage_type: DamageType2;
  damage_dice: string;
}

export interface LegendaryAction {
  name: string;
  desc: string;
  attack_bonus?: number;
  damage: Damage2[];
}

export interface Monster {
  index: string;
  name: string;
  size: string;
  type: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: Proficiency[];
  damage_vulnerabilities: any[];
  damage_resistances: any[];
  damage_immunities: any[];
  condition_immunities: any[];
  senses: Senses;
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities: SpecialAbility[];
  actions: Action[];
  legendary_actions: LegendaryAction[];
  url: string;
}
