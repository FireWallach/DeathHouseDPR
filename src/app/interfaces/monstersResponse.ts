export interface monsterListing {
  index: string;
  name: string;
  url: string;
}

export interface MonsterList {
  count: number;
  results: monsterListing[];
}
