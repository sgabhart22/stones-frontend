import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Stone } from '../../models/stone-model';
import { colormap } from '../../constants';

import { CellService } from '../../services/cell.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

	@Input() stone: Stone;
	@Input() coords: any;

  constructor(private cs: CellService) { 
		console.log('Cell constructor.');
	}

	ngOnChanges() {
		if(this.stone && this.coords) {
			// Consider fade animation
		}
	}

  ngOnInit() {
  }

	getBg(): string {
		return this.stone ? colormap['bg'][this.stone['bg']] : 'transparent';
	}

	getFg(): string {
		return colormap['fg'][this.stone['fg']];
	}

	isCircle(): boolean {
		return this.stone ? this.stone['shape'] === 'circle' : false;
	}

	isSquare(): boolean {
		return this.stone ? this.stone['shape'] === 'square' : false;
	}

	isTriangle(): boolean {
		return this.stone ? this.stone['shape'] === 'triangle' : false;
	}

	isStar(): boolean {
		return this.stone ? this.stone['shape'] === 'star' : false;
	}

	isWild(): boolean {
		return this.stone ? this.stone['shape'] === 'wild' : false;
	}

	setCoords(x: number, y: number) {
		this.cs.setLocation(this.coords);
	}
}
