import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { player } from '../interfaces/player';
import { standardDice } from '../constants/5eConstants';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
  @Input() player!: player;
  @Output("recalculateValues") recalculateValues: EventEmitter<any> = new EventEmitter();
  @Output("selectedDie") selectedDie: EventEmitter<string> = new EventEmitter();
  public dice = standardDice;
  public selectedDieValue = this.dice[2];
  constructor() { }

  public onSelectedDieChange(){
    this.selectedDie.emit(this.selectedDieValue);
    this.recalculateValues.emit();
  }

  ngOnInit(): void {
  }

}
