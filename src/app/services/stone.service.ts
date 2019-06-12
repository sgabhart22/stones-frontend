import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Stone } from '../models/stone-model';

@Injectable({
  providedIn: 'root'
})
export class StoneService {

	private stoneSource = new BehaviorSubject(null);
	public currentStone = this.stoneSource.asObservable();

  constructor() { }

	setStone(stone: Stone) {
		this.stoneSource.next(stone);

		console.log('Stone service received ' + JSON.stringify(stone) + ' as current stone.');
	}
}
