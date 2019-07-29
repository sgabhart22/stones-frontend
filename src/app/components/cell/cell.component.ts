import { Component, OnInit, Input } from '@angular/core';

import { Stone } from '../../models/stone-model';
import { colormap } from '../../constants';

import { CellService } from '../../services/cell.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

	@Input() coords: any;
	public stone: Stone;

  constructor(private cs: CellService,
							private gs: GameService) { 
		// Instantiated every placement.
	}

  ngOnInit() {
		if(this.coords) {
			this.stone = this.gs.getBoard().cells[this.coords['x']][this.coords['y']].getMember();
			console.log('coords ' + JSON.stringify(this.coords) + ' has ' + JSON.stringify(this.stone));
		} else {
			
		}
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
