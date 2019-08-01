import { Component, OnInit, Input, ViewChildren, QueryList, OnChanges } from '@angular/core';

import { Cell } from '../../shared/cell';
import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {

	public board: Board<Stone>;
	@ViewChildren(Cell) cells !: QueryList<Cell<Stone>>;

  constructor(private gs: GameService) { 
		this.initialize();
	}

  ngOnInit() {
		this.gs.placed.subscribe(placed => {
			if(placed) {
				this.board = this.gs.getBoard();
			this.initialize();
		})

		this.gs.isNewGame.subscribe(newGame => {
			if(newGame) {
				this.initialize();
			}
		});
	}

	ngOnChanges() {
	}

	private initialize() {
		this.board = this.gs.getBoard();
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
