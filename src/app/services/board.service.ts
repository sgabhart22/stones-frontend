import { Injectable } from '@angular/core';

import { Board } from '../shared/board';
import { Stone } from '../models/stone-model';
import { StoneDeck } from '../models/stone-deck';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

	private board: Board<Stone>;

  constructor() {
		this.board = new Board(10, 10);
		console.log("In BoardService constructor.");
	}

	getBoard(): Board<Stone> {
		return this.board;
	}

	placeAFew(deck: StoneDeck) {
		this.board.setAt(0, 1, deck.pop());
		this.board.setAt(1, 9, deck.pop());
		this.board.setAt(9, 0, deck.pop());
	}

}
