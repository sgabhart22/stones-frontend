import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Game } from '../models/game';
import { Stone } from '../models/stone';

@Injectable({
  providedIn: 'root'
})
export class GameService {

	private availableSource = new BehaviorSubject(null);
	public isAvailable = this.availableSource.asObservable();

	private loadedSource = new BehaviorSubject(null);
	public wasLoaded = this.loadedSource.asObservable();

	private gameOverSource = new BehaviorSubject(null);
	public isGameOver = this.gameOverSource.asObservable();

	private newGameSource = new BehaviorSubject(null);
	public isNewGame = this.newGameSource.asObservable();

	private remainingSource = new BehaviorSubject(null);
	public remaining = this.remainingSource.asObservable();

	private scoreSource = new BehaviorSubject(null);
	public score = this.scoreSource.asObservable();

	private timeSource = new BehaviorSubject(null);
	public time = this.timeSource.asObservable();

	public game: Game;
	public queue: Stone[];

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

	public setGameOver(gameStatus: string) {
		this.gameOverSource.next(gameStatus);
	}

	public setNewGame(newGame: boolean) {
		this.newGameSource.next(newGame);
	}

	public setScore(score: number) {
		this.scoreSource.next(score);
	}

	public setQueue(queue: Stone[]) {
		this.queue = queue;
	}

	public getQueue(): Stone[] {
		return this.queue;
	}

	public setRemaining(remaining: number) {
		this.remainingSource.next(remaining);
	}

	public setTime(time: number) {
		this.timeSource.next(time);
	}

	public loadFromJson(state: any) {
		console.log('Deck before load: ' + JSON.stringify(this.game.deck));
		
		this.game.loadFrom(state);
		
		this.queue = [];
		state['queue'].forEach(stone => {
			this.queue.push(new Stone(stone['bg'], stone['fg'], stone['shape']));
		});

		this.loadedSource.next(state);
		console.log('Deck after load: ' + JSON.stringify(this.game.deck));
	}

	public newGame() {
		this.game = new Game();
	}
}
