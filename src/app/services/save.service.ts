import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

	private stateSource = new BehaviorSubject(null);
	public currentState = this.stateSource.asObservable();

  constructor() { }

	public setState(state: string) {
		this.stateSource.next(state);
	}
}
