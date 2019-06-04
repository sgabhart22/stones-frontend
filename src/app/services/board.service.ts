import { Injectable } from '@angular/core';

import { Board } from '../shared/board';
import { Stone } from '../models/stone-model';
import { StoneDeck } from '../models/stone-deck';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

	private board: Board<Stone>;
	private deck: StoneDeck;

  constructor() { 
		this.board = new Board(10, 10);
		this.deck = new StoneDeck();

		this.placeAFew();
	}

	getBoard(): Board<Stone> {
		return this.board;
	}

	placeAFew() {
		this.board.setAt(0, 1, this.deck.pop());
		this.board.setAt(1, 9, this.deck.pop());
		this.board.setAt(9, 0, this.deck.pop());
	}

}
