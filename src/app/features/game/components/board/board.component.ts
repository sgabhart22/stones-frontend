import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../models/board';
import { Stone } from '../../../../models/stone-model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board<Stone>;
	private nextStone: Stone;

  constructor() { }

  ngOnInit() { }

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
