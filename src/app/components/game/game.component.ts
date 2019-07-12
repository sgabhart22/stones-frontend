import { Component, OnInit } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';

import { Board } from '../../shared/board';
import { Game } from '../../models/game';
import { Stone } from '../../models/stone-model';
import { StoneDeck } from '../../models/stone-deck';
import { GameService } from '../../services/game.service';
import { CellService } from '../../services/cell.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	// TODO: Move queue into Game model
	private game: Game;
	public queue: Stone[];
	public gameClock: number;

  constructor(private gs: GameService,
							private cs: CellService,
						  private st: SimpleTimer) {
		this.initialize();
	}

	private initialize() {
		this.game = this.gs.getGame();
		this.queue = [];
		this.gameClock = 0;

		for(var i: number = 0; i < 6; i++) {
			this.queue.push(this.game.deck.pop());
		}

		this.gs.setQueue(this.queue);
		this.gs.setRemaining(this.getRemaining());
		this.gs.setScore(0);

		this.initializeTimer();
	}

	private initializeTimer() {
		this.gs.setTime(this.gameClock);
		console.log('New Timer? ' + this.st.newTimer('clock', 1, true));
		console.log('Subscribed? ' + this.st.subscribe('clock', () => this.tick()));	
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
					this.gs.setScore(this.game.score);

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

				this.gs.setRemaining(this.getRemaining());
			}

			this.gs.setQueue(this.queue);
		});

		this.gs.wasLoaded.subscribe(loaded => {
			if(loaded) {
				this.game = this.gs.getGame();
				this.queue = this.gs.getQueue(); 
			}
		});

		this.gs.isNewGame.subscribe(newGame => {
			if(newGame) {
				this.st.unsubscribe(this.st.getSubscription()[0]);
				this.initialize();
			}
		});

		this.gs.isGameOver.subscribe(gameOver => {
			if(gameOver) {
				console.log('Game over received in Game component.');
				console.log('Deleted timer? ' + this.st.delTimer('clock'));
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
			if(this.isBoardFull()) {
				console.log('Winner!!!');
				this.gs.setGameOver("win");
				return;
			}
		}
		
		if(!this.game.canFit(this.queue[0])) {
			console.log('Game over...');
			this.gs.setGameOver("lose");
		}
	}

	// TODO: Factor these loops out by adding getter to Board for current number of occupants.
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
		let rem: number = this.game.getDeckRemaining();
		
		this.queue.forEach(stone => {
			if(stone['bg'] !== 'empty') rem++;
		});

		return rem;
	}

	private tick() {
		this.gameClock++;
		this.gs.setTime(this.gameClock);
	}
}

