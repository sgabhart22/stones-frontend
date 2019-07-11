import { Board } from '../shared/board';

import { Stone } from './stone-model';
import { StoneDeck } from './stone-deck';

export class Game {
  public board: Board<Stone>;
  public deck: StoneDeck;

	public available: any[];
	private matchDefs = {};

  constructor() {
    this.board = new Board<Stone>(10, 10);
    this.deck = new StoneDeck();

		this.initializeBoard();
  }

  private initializeBoard() { 
		for(var i: number = 0; i < 6; i++) {
			this.pickRandomCell();
		}
	}

	setAt(x: number, y: number, stone: Stone): boolean {
		let placed: boolean;
	
		// if neighbors agree
		if(this.checkNeighbors(x, y, stone) && !this.board.getAt(x, y)) {	
			this.board.setAt(x, y, stone);
			console.log('Placed stone, ' + stone + ' matched as ' + stone.matchClass);
			console.log('Match descriptions look like this: ' + JSON.stringify(this.matchDefs));
			placed = true;
		} else {
			placed = false;
		}
		
		return placed;
	}

	private pickRandomCell(): any {
		let done: boolean = false;

		while(!done) {
			let x: number = Math.floor(Math.random() * 8) + 1;
			let y: number = Math.floor(Math.random() * 8) + 1;

			if(!this.board.getAt(x, y) && this.board.hasNoNeighbors(x, y)) {
				this.board.setAt(x, y, this.deck.pop());
				done = true;
			}
		}
		
	}

	checkNeighbors(x: number, y: number, stone: Stone): boolean {
		this.matchDefs = { 'classA': 0, 'classB': 0 };
		
		let fits = true;
		let allEmpty: boolean = true;

		this.board.getNeighbors(x, y).forEach(neighbor => {

			let cmp: Stone = this.board.getAt(neighbor['x'], neighbor['y']);

			if(cmp) {		
				if(!stone.matches(cmp)) {
					fits = false;
				} else {
					this.matchDefs[stone.matchClass]++;
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

	public getDeckRemaining(): number {
		return this.deck.size();
	}

	public loadFrom(gameState: any) {
		this.board = new Board<Stone>(10, 10);
		
		let loadBoard = gameState['board'];
		for(var i: number = 0; i < 10; i++) {
			for(var j: number = 0; j < 10; j++) {
				if(loadBoard[i][j] !== 'none') this.board.setAt(i, j, loadBoard[i][j]);
			}
		}

		this.deck.loadFrom(gameState['deck']);
	}
}
