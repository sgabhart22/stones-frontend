import { Component, OnInit } from '@angular/core';

import { MockBoardService } from '../../services/mock-board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	public board: any;

  constructor(private mbs: MockBoardService) { 
		this.board = this.mbs.getBoard();
	}

  ngOnInit() {
  }

}
