import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

	private availableSource = new BehaviorSubject(null);
	public isAvailable = this.availableSource.asObservable();

	public game: Game;

  constructor() { 
		this.game = new Game();
	}

	public getBoard(): any {
		return this.game.getBoard();
	}

	public setAvailable(available: boolean) {
		this.availableSource.next(available);
	}
}
