import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board<Stone>;

  constructor(board: Board<Stone>) { 
		this.board = board;
	}

  ngOnInit() {
  }

	getStone(x: any, y: any) {
		return this.board.getAt(x, y);
	}

	logStone(x: any, y: any) {
		console.log(this.board.getAt(x, y));
	}
}
