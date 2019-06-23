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
	public queue: any;

  constructor() { 
		this.game = new Game();
	}

	public getGame(): any {
		return this.game;
	}

	public getBoard(): any {
		return this.game.getBoard();
	}

	public setAvailable(available: boolean) {
		this.availableSource.next(available);
	}

	public setQueue(queue: any) {
		this.queue = queue;
	}

	public getQueue(): any {
		return this.queue;
	}
}
