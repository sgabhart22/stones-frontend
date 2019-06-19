import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';

import { CellService } from '../../services/cell.service';

import { Game } from '../../models/game';
import { Stone } from '../../models/stone-model';
import { StoneDeck } from '../../models/stone-deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	private game: Game;
	public queue: Stone[];

  constructor(private cs: CellService) {
		this.game = new Game();
		this.queue = [];

		for(var i: number = 0; i < 6; i++) {
			this.queue.push(this.game.deck.pop());
		}
	}

  ngOnInit() { 
		this.cs.clickedOn.subscribe(coords => {
			if(coords) {
				let next = this.queue[0];
				
				if(this.game.setAt(coords['x'], coords['y'], next)) {
					console.log(next + ' placed successfully.');
					this.queue.shift();
					this.queue.push(this.game.deck.pop());

					this.checkStatus();
				} else {
					console.log(next + ' not placed.');
				}
			}
		});
	}
	
	getAtQueuePosition(index: number): Stone {
		return this.queue[5 - index];
	}

	getBoard(): Board<Stone> {
		return this.game.getBoard();
	}

	private checkStatus() {
		if(!this.game.deck.hasNext()) {
			if(this.isBoardFull()) console.log('Winner!!!');
		} else if(!this.game.canFit(this.queue[0])) {
			console.log('Game over...');	
		}
	}

	private isBoardFull(): boolean {
		let filled: number = 0;
		let board: Board<Stone> = this.getBoard();

		for(var i: number = 0; i < board.cells.length; i++) {
			for(var j: number = 0; j < board.cells[0].length; j++) {
				if(board.getAt(i, j)) filled++;
			}
		}

		return filled === 84;
	}

	saveState() {
		// TBD
	}
}
