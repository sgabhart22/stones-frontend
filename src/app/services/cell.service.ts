import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CellService {

	private locationSource = new BehaviorSubject(null);
	public currentLocation = this.locationSource.asObservable();
  
	constructor() { }

	public setLocation(coords: Object) {
		this.locationSource.next(coords);

		console.log('Coordinates received in cell service: ' + JSON.stringify(coords));
	}
}
