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
		this.mockStone = this.rss.getStone();
		this.mockStone = mcs.getMockCell();
	}

  ngOnInit() {
  }

	getBg(): string {
		return colormap['bg'][this.mockStone['bg']];
	}

	getFg(): string {
		return colormap['fg'][this.mockStone['fg']];
	}

	isCircle(): boolean {
		return this.mockStone['shape'] === 'circle';
	}

	isSquare(): boolean {
		return this.mockStone['shape'] === 'square';
	}

	isTriangle(): boolean {
		return this.mockStone['shape'] === 'triangle';
	}

	isStar(): boolean {
		return this.mockStone['shape'] === 'star';
	}
}
