import { Injectable } from '@angular/core';

import { Stone } from '../models/stone-model';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

	public queue: Stone[];

  constructor() { 
		this.queue = [];
	}

	addToQueue(stone: Stone) {
		this.queue.push(stone);
	}

	getNext(): Stone {
		return this.queue.pop();
	}
}
