import { Component, OnInit } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';

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

  constructor(private gs: GameService, 
							private st: SimpleTimer) { 
		this.st.newTimer('clock', 1, true);
		this.gameClock = 0;
	}

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

		this.gs.isGameOver.subscribe(gameOver => {
			if(gameOver) {
				let res = this.st.unsubscribe(this.st.getSubscription()[0]);
			}
		});

		this.st.subscribe('clock', () => this.count());
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

	private count() {
		this.gameClock++;
	}
}
