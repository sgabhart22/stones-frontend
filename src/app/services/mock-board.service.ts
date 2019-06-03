import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockBoardService {

	private board: Object[][];

  constructor() { 
		this.board = [];

		for(var i: number = 0; i < 10; i++) {
			this.board[i] = [];

			for(var j: number = 0; j < 10; j++) {
				this.board[i][j] = { 'value': 'none' };
			}
		}
	}

	getBoard(): any {
		return this.board;
	}
}
