import { Component, OnInit } from '@angular/core';
import { properties } from 'src/properties';
import { player } from 'src/app/interfaces/player';
import { enemy } from 'src/app/interfaces/enemy';
import { dprCalculations } from '../interfaces/dprCalculations';
import { DndApiService } from '../services/dnd-api.service';
import { MonsterList } from '../interfaces/monstersResponse';
import { Monster } from '../interfaces/monster';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dprcalc',
  templateUrl: './dprcalc.component.html',
  styleUrls: ['./dprcalc.component.scss'],
})
export class DPRCalcComponent implements OnInit {
  public formGroup: FormGroup;
  public debug = properties.debug;
  public selectedDie = 'd8';
  public dice = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20'];
  public monsterListResults: MonsterList = {
    count: 0,
    results: [],
  };
  options: string[] = [];
  filteredOptions: string[] = [];
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
    attackDamage: 8,
  };
  public enemy: enemy = {
    armorClass: 10,
  };

  constructor(private dndApiService: DndApiService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      monsterName: [''],
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.recalculateValues();
    this.retrieveMonsterList();
  }

  initForm() {
    this.formGroup.get('monsterName')?.valueChanges.subscribe((response) => {
      this.filerData(response);
    });
  }

  filerData(enteredData: string) {
    this.filteredOptions = this.options.filter((item) => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  private retrieveMonsterList() {
    this.dndApiService.getMonsters().subscribe((data) => {
      this.monsterListResults = data;
      this.monsterListResults.results.forEach((monster) => {
        this.options.push(monster.name);
      });
      this.filteredOptions = this.options;
    });
  }

  public updateMonsterStats(selectedMonster: string) {
    this.monsterListResults.results.forEach((monster) => {
      if (monster.name === selectedMonster) {
        this.dndApiService.getMonsterByName(monster).subscribe((data) => {
          this.enemy.armorClass = data.armor_class;
        });
      }
    });
    this.recalculateValues();
  }

  public recalculateValues() {
    this.player.attackDamage = Number.parseInt(this.selectedDie.substring(1));
    this.dprCalculations.fChanceToHit =
      (21 - (this.enemy.armorClass - this.player.attackBonus)) / 20;
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
    this.dprCalculations.fChanceToHit =
      Math.round(this.dprCalculations.fChanceToHit * 100) / 100;
    this.dprCalculations.dChanceToHit =
      Math.round(this.dprCalculations.dChanceToHit * 100) / 100;
    this.dprCalculations.aChanceToHit =
      Math.round(this.dprCalculations.aChanceToHit * 100) / 100;
    this.dprCalculations.aDPR =
      Math.round(this.dprCalculations.aDPR * 100) / 100;
    this.dprCalculations.aaDPR =
      Math.round(this.dprCalculations.aaDPR * 100) / 100;
    this.dprCalculations.daDPR =
      Math.round(this.dprCalculations.daDPR * 100) / 100;
  }
}
