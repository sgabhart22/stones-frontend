import { Component, OnInit } from '@angular/core';

import { Board } from '../../shared/board';

import { GameService } from '../../services/game.service';
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

  constructor(private gs: GameService,
							private cs: CellService) {
		this.game = this.gs.getGame();
		this.queue = [];

		for(var i: number = 0; i < 6; i++) {
			this.queue.push(this.game.deck.pop());
		}

		this.gs.setQueue(this.queue);
		console.log(this.getRemaining() + ' stones left');
	}

  ngOnInit() { 
		this.cs.clickedOn.subscribe(coords => {
			if(coords) {
				console.log('Before shift (dequeue), queue looks like ' + this.queue);
				let next = this.queue.shift();
				console.log('Next stone is ' + JSON.stringify(next));
				console.log('Queue now looks like ' + this.queue);

				if(this.game.setAt(coords['x'], coords['y'], next)) {
					console.log(next + ' placed successfully.');

					if(this.game.deck.hasNext()) {
						this.queue.push(this.game.deck.pop());
						console.log('After placement, queue looks like ' + this.queue);
					}

					this.checkStatus();
				} else {
					console.log('Putting ' + JSON.stringify(next) + ' back into queue');
					this.queue.unshift(next);
					console.log('Queue is ' + this.queue);
					console.log(next + ' not placed.');
				}

				console.log(this.getRemaining() + ' stones left');
			}

			this.gs.setQueue(this.queue);
		});

		this.gs.wasLoaded.subscribe(loaded => {
			if(loaded) {
				this.game = this.gs.getGame();
				this.queue = this.gs.getQueue(); 
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
			if(this.queue.length < 6) {
				this.queue.push(new Stone('empty', 'empty', 'empty'));
			}
			if(this.isBoardFull()) console.log('Winner!!!');

			return;
		}
		
		if(!this.game.canFit(this.queue[0])) {
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

	public getRemaining(): number {
		return this.game.getDeckRemaining() + this.queue.length;
	}

}
