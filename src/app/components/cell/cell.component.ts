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
		this.stone = this.mcs.getMockCell();
	}

  ngOnInit() {
  }

	getBg(): string {
		return colormap['bg'][this.stone['bg']];
	}

	getFg(): string {
		return colormap['fg'][this.stone['fg']];
	}

	isCircle(): boolean {
		return this.stone['shape'] === 'circle';
	}

	isSquare(): boolean {
		return this.stone['shape'] === 'square';
	}

	isTriangle(): boolean {
		return this.stone['shape'] === 'triangle';
	}

	isStar(): boolean {
		return this.stone['shape'] === 'star';
	}

	isWild():boolean {
		return this.stone['shape'] === 'wild';
	}
}
