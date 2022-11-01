import { Component, OnInit } from '@angular/core';
import { properties } from 'src/properties';

@Component({
  selector: 'app-dprcalc',
  templateUrl: './dprcalc.component.html',
  styleUrls: ['./dprcalc.component.scss'],
})
export class DPRCalcComponent implements OnInit {
  public dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];

  constructor() {}
  public debug = properties.debug;

  ngOnInit(): void {}

  public attackBonus: number = 0;
  public attackDamageModifier: number = 0;
  public attackDiceQuantity: number = 1;
  public enemyArmorClass: number = 10;
  public polarity: number = 1;
  public attackDamage: number = 0;
  public averageDieRoll: number = 0;
  public chanceToHit: string = 'Please enter values';
  public averageDamagePerRound: string = 'Please enter values';
  public advantageStatus: number = 0; // 1 = advantage, 0 = normal, -1 = disadvantage

  public recalculateValues() {
    this.chanceToHit = (
      ((21 - (this.enemyArmorClass - this.attackBonus * this.polarity)) / 20) *
      100
    ).toFixed(2);
    this.averageDieRoll = Number(this.attackDamage) / 2 + 0.5;
    this.averageDamagePerRound = (
      (this.attackDiceQuantity *
        (this.averageDieRoll + this.averageDieRoll / 20) +
        this.attackDamageModifier) *
      (Number(this.chanceToHit) / 100)
    ).toFixed(2);
  }
}
