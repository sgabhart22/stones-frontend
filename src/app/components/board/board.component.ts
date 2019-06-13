import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

import { CellService } from '../../services/cell.service';
import { StoneService } from '../../services/stone.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board<Stone>;
	private nextStone: Stone;

  constructor(private cs: CellService,
							private ss: StoneService,
						  private gs: GameService) { }

  ngOnInit() {
		this.cs.currentLocation.subscribe(coords => {
			if(coords) {
				if(!this.getStone(coords['x'], coords['y'])) {
					console.log('BoardComponent: Checked coordinates from CellService; this is an empty cell.');

					this.gs.setAvailable(true);
					this.setStone(coords['x'], coords['y'], this.nextStone);
				} else {
					console.log('BoardComponent: Checked coordinates from CellService; this cell isn\'t empty.');
					
					this.gs.setAvailable(false);
				}
			}
		});

		this.ss.stoneSource.subscribe(stone => {
			this.nextStone = stone;
		});
  }

	getStone(x: any, y: any) {
		return this.board.getAt(x, y);
	}

	setStone(x: any, y: any, stone: Stone) {
		this.board.setAt(x, y, stone);
	}

	logStone(x: any, y: any) {
		console.log(this.board.getAt(x, y));
	}
}
