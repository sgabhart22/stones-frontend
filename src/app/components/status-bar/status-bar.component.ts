import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

	private remainingStones: number;

  constructor(private gs: GameService) { }

  ngOnInit() {
		this.gs.remaining.subscribe(remaining => {
			if(remaining) {
				this.remainingStones = remaining;
			} else {
				this.remainingStones = 0;
			}
		});
  }

	getRemaining(): number {
		return this.remainingStones;
	}

}
