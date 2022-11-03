import { Component, OnInit } from '@angular/core';
import { properties } from 'src/properties';
import { player } from 'src/app/interfaces/player';
import { enemy } from 'src/app/interfaces/enemy';
import { dprCalculations } from '../interfaces/dprCalculations';

@Component({
  selector: 'app-dprcalc',
  templateUrl: './dprcalc.component.html',
  styleUrls: ['./dprcalc.component.scss'],
})
export class DPRCalcComponent implements OnInit {
  public debug = properties.debug;
  public selectedDie = 'd8';
  public dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
  public dprCalculations: dprCalculations = {
    averageDieRoll: 0,
    fChanceToHit: null,
    aChanceToHit: null,
    dChanceToHit: null,
    aDPR: null,
    daDPR: null,
    aaDPR: null,
  };
  public player: player = {
    attackBonus: 0,
    attackDamageModifier: 0,
    attackDiceQuantity: 1,
    polarity: 1,
    attackDamage: 8,
  };
  public enemy: enemy = {
    armorClass: 10,
  };

  constructor() {}

  ngOnInit(): void {
    this.recalculateValues();
  }

  public recalculateValues() {
    this.player.attackDamage = Number.parseInt(this.selectedDie.substring(1));
    this.dprCalculations.fChanceToHit =
      (21 -
        (this.enemy.armorClass -
          this.player.attackBonus * this.player.polarity)) /
      20;
    this.dprCalculations.dChanceToHit = Math.pow(
      this.dprCalculations.fChanceToHit,
      2
    );
    this.dprCalculations.aChanceToHit =
      1 -
      Math.pow(this.enemy.armorClass - this.player.attackBonus - 1, 2) / 400;
    this.dprCalculations.averageDieRoll = this.player.attackDamage / 2 + 0.5;
    this.dprCalculations.aDPR =
      (this.player.attackDiceQuantity *
        (this.dprCalculations.averageDieRoll +
          this.dprCalculations.averageDieRoll / 20) +
        this.player.attackDamageModifier) *
      this.dprCalculations.fChanceToHit;
    this.dprCalculations.daDPR =
      (this.player.attackDiceQuantity *
        (this.dprCalculations.averageDieRoll +
          this.dprCalculations.averageDieRoll / 20) +
        this.player.attackDamageModifier) *
      this.dprCalculations.dChanceToHit;
    this.dprCalculations.aaDPR =
      (this.player.attackDiceQuantity *
        (this.dprCalculations.averageDieRoll +
          this.dprCalculations.averageDieRoll / 20) +
        this.player.attackDamageModifier) *
      this.dprCalculations.dChanceToHit;
  }
}
