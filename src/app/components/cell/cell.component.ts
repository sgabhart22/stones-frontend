import { Component, OnInit } from '@angular/core';

import { MockCellService } from '../../services/mock-cell.service';
import { RandomStoneService } from '../../services/random-stone.service';

import { Stone } from '../../models/stone-model';
import { colormap } from '../../constants';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

	public stone: Stone;

  constructor(private rss: RandomStoneService, 
							private mcs: MockCellService) { 
		this.stone = this.rss.getStone();
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
}
