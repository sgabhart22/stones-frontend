import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockCellService {

  constructor() { }

	getEmptyCell(): any {
		return 'none';
	}

	getMockCell(): any {
		return {
			'bg': 'black',
			'fg': 'red',
			'shape': 'circle'
		}
	}
}
