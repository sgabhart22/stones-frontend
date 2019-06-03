import { Injectable } from '@angular/core';

import { Stone } from '../models/stone-model';
import { StoneDeck } from '../models/stone-deck';

@Injectable({
  providedIn: 'root'
})
export class RandomStoneService {

	private deck: StoneDeck;

  constructor() { 
		this.deck = new StoneDeck();
	}

	getStone(): Stone {
		return this.deck.pop();
	}
}
