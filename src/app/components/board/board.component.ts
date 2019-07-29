import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	private board: Board<Stone>;

  constructor(private gs: GameService) { 
		this.board = this.gs.getBoard();
	}

  ngOnInit() { 
		this.gs.isNewGame.subscribe(newGame => {
			if(newGame) {
				this.board = this.gs.getBoard();
			}
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
