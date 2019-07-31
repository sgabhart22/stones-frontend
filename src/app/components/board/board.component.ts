import { Component, OnInit, Input, ViewChildren, QueryList, OnChanges } from '@angular/core';

import { Cell } from '../../shared/cell';
import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnChanges {

	@Input() board: Board<Stone>;
	@ViewChildren(Cell) cells !: QueryList<Cell<Stone>>;

  constructor() { }

  ngOnInit() { }

	ngOnChanges() {
		console.log('OnChanges, Board has ' + this.cells.length + ' children');
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
