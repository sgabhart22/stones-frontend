import { Injectable } from '@angular/core';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

	public game: Game;

  constructor() { 
		this.game = new Game();
	}

	public getBoard(): any {
		return this.game.getBoard();
	}
}
