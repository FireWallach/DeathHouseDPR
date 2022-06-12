import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dprcalc',
  templateUrl: './dprcalc.component.html',
  styleUrls: ['./dprcalc.component.scss'],
})
export class DPRCalcComponent implements OnInit {
  public dice = [
    'd4',
    'd6',
    'd8',
    'd10',
    'd12',
    'd20',
  ];

  constructor() {}

  ngOnInit(): void {}

  public attackBonus: number = 0;
  public polarity: number = 1;
  public enemyArmorClass: number = 10;
  public attackDamage: number = 8;
  public attackDiceQuantity: number = 1;
  public chanceToHit: string = (100-((21-this.enemyArmorClass - (this.attackBonus*this.polarity))/20)*100).toFixed(2);
  public averageDamagePerAttack: number = (this.attackDamage+1)/2;
  public averageDamagePerRound: number = this.averageDamagePerAttack*this.attackDiceQuantity*(Number(this.chanceToHit)/100);

  public recalculateValues() {
    this.chanceToHit = (100-((21-this.enemyArmorClass - (this.attackBonus*this.polarity))/20)*100).toFixed(2);
    this.averageDamagePerRound = this.averageDamagePerAttack*this.attackDiceQuantity*(Number(this.chanceToHit)/100);
  }
}
