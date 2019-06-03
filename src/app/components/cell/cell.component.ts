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

	public anyStone: Stone, mockStone: Stone;

  constructor(private rss: RandomStoneService, 
							private mcs: MockCellService) { 
		this.anyStone = this.rss.getStone();
		this.mockStone = mcs.getMockCell();
	}

  ngOnInit() {
  }

	getBg(): string {
		return colormap['bg'][this.anyStone['bg']];
	}

	getFg(): string {
		return colormap['fg'][this.anyStone['fg']];
	}

	isCircle(): boolean {
		return this.anyStone['shape'] === 'circle';
	}

	isSquare(): boolean {
		return this.anyStone['shape'] === 'square';
	}

	isTriangle(): boolean {
		return this.anyStone['shape'] === 'triangle';
	}

	isStar(): boolean {
		return this.anyStone['shape'] === 'star';
	}
}
