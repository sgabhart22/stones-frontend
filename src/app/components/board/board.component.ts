import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

import { CellService } from '../../services/cell.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board<Stone>;

  constructor(private cs: CellService,
						  private gs: GameService) { }

  ngOnInit() {
		this.cs.currentLocation.subscribe(coords => {
			if(coords) {
				if(!this.getStone(coords['x'], coords['y'])) {
					console.log('BoardComponent: Checked coordinates from CellService; this is an empty cell.');

					this.gs.setAvailable(true);
				} else {
					console.log('BoardComponent: Checked coordinates from CellService; this cell isn\'t empty.');
					
					this.gs.setAvailable(false);
				}
			}
		});
  }

	getStone(x: any, y: any) {
		return this.board.getAt(x, y);
	}

	logStone(x: any, y: any) {
		console.log(this.board.getAt(x, y));
	}
}
