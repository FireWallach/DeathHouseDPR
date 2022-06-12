import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dprcalc',
  templateUrl: './dprcalc.component.html',
  styleUrls: ['./dprcalc.component.scss'],
})
export class DPRCalcComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public attackBonus: number = 0;
  public polarity: number = 1;
  public enemyArmorClass: number = 10;
  public chanceToHit: number = ((21-this.enemyArmorClass - (this.attackBonus*this.polarity))/20)*100;
}
