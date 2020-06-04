import { Injectable } from '@angular/core';

import { Stone } from '../features/game/models/stone';
import { StoneDeck } from '../features/game/models/deck';

@Injectable({
  providedIn: 'root'
})
export class RandomStoneService {

	private deck: StoneDeck;

  constructor() { 
		this.deck = new StoneDeck();
	}

	getStone(): Stone {
	/*
		if(!this.deck.stones.length) {
			this.deck = new StoneDeck();
		}
	*/

		return this.deck.pop();
	}
}
