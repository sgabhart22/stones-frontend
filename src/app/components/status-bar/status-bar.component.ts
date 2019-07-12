import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

	private remainingStones: number;
	private gameScore: number;
	private gameClock: number;

  constructor(private gs: GameService) { }

  ngOnInit() {
		this.gs.remaining.subscribe(remaining => {
			if(remaining) {
				this.remainingStones = remaining;
			} else {
				this.remainingStones = 0;
			}
		});

		this.gs.score.subscribe(score => {
			if(score) {
				this.gameScore = score;
			} else {
				this.gameScore = 0;
			}
		});

		this.gs.time.subscribe(time => {
			if(time) {
				this.gameClock = time;
			} else {
				this.gameClock = 0;
			}
		});
  }

	getRemaining(): number {
		return this.remainingStones;
	}

	getScore(): number {
		return this.gameScore;
	}

	getClock(): number {
		return this.gameClock;
	}
}

