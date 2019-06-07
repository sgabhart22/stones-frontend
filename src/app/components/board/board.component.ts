import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

// import { MockBoardService } from '../../services/mock-board.service';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	public board: Board<Stone>;

  constructor(private bs: BoardService) { 
		this.board = this.bs.getBoard();
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
