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
		console.log('CellService: Received these coordinates from click: ' + JSON.stringify(coords));
		
		this.locationSource.next(coords);
	}
}
