import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';
import { BoardService } from '../../services/board.service';

import { Stone } from '../../models/stone-model';
import { StoneDeck } from '../../models/stone-deck';

import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	public deck: StoneDeck;

  constructor(private bs: BoardService, private qs: QueueService) { 
		this.deck = new StoneDeck();
		
		this.bs.placeAFew(this.deck);
		for(var i: number = 0; i < 6; i++) {
			this.qs.addToQueue(this.deck.pop());
		}
	}

  ngOnInit() {
  }
	
	getNext(): any {
		return this.qs.getNext();
	}
		
}
