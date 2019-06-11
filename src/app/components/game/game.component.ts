import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';

import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';

import { Stone } from '../../models/stone-model';
import { StoneDeck } from '../../models/stone-deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	public deck: StoneDeck;
	public board: Board<Stone>;
	public queue: Stone[];

  constructor(private gs: GameService) {
		this.board = this.gs.getBoard();
		this.deck = new StoneDeck();
		this.queue = [];

		for(var i: number = 0; i < 6; i++) {
			this.queue.push(this.deck.pop());
		}
	}

  ngOnInit() {
  }
	
	getAtQueuePosition(index: number): Stone {
		return this.queue[5 - index];
	}
		
}
