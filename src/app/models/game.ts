import { Board } from '../shared/board';

import { Stone } from './stone-model';
import { StoneDeck } from './stone-deck';

export class Game {
  public board: Board<Stone>;
  public deck: StoneDeck;

	public available: any[];

  constructor() {
    this.board = new Board<Stone>(10, 10);
    this.deck = new StoneDeck();

		this.initializeBoard();
  }

  initializeBoard() { 
		for(var i: number = 0; i < 6; i++) {
			this.pickRandomCell();
		}
	}

	setAt(x: number, y: number, stone: Stone): boolean {
		let placed: boolean;
	
		// if neighbors agree
		if(this.checkNeighbors(x, y, stone) && !this.board.getAt(x, y)) {	
			this.board.setAt(x, y, stone);
			placed = true;
		} else {
			this.deck.push(stone);
			placed = false;
		}
		
		return placed;
	}

	pickRandomCell(): any {
		let done: boolean = false;

		while(!done) {
			let x: number = Math.floor(Math.random() * 10);
			let y: number = Math.floor(Math.random() * 10);

			if(!this.board.getAt(x, y)) {
				this.board.setAt(x, y, this.deck.pop());
				done = true;
			}
		}
		
	}

	checkNeighbors(x: number, y: number, stone: Stone): boolean {
		let fits = true;
		let allEmpty: boolean = true;

		this.board.getNeighbors(x, y).forEach(neighbor => {

			let cmp: Stone = this.board.getAt(neighbor['x'], neighbor['y']);

			if(cmp) {		
				if(!stone.matches(cmp)) {
					fits = false;
				}
				allEmpty = false;
			}
		});

		if(allEmpty) return false;
		return fits;
	}

	canFit(stone: Stone): boolean {
		let can: boolean = false;
		this.available = [];

		for(var i: number = 0; i < 10; i++) {
			for(var j: number = 0; j < 10; j++) {
				if(this.board.getAt(i, j)) continue;

				if(this.checkNeighbors(i, j, stone)) {
					can = true;
					this.available.push({ 'x': i, 'y': j });
				}
			}
		}

		return can;
	}

	public getBoard(): Board<Stone> {
		return this.board;
	}

}
