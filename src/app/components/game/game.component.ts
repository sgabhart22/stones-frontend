import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';
import { BoardService } from '../../services/board.service';

import { Stone } from '../../models/stone-model';
import { StoneDeck } from '../../models/stone-deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	public deck: StoneDeck;
	public queue: Stone[];

  constructor(private bs: BoardService) { 
		this.deck = new StoneDeck();
		this.queue = [];
		this.bs.placeAFew(this.deck);
		
		for(var i: number = 0; i < 6; i++) {
			this.queue.push(this.deck.pop());
		}
	}

  ngOnInit() {
  }
	
	getNext(): any {
		let next = this.queue.pop();
		
		if(this.deck.hasNext()) this.queue.push(this.deck.pop());

		return next;
	}
		
}
