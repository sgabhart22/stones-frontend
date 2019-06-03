import { Component, OnInit } from '@angular/core';

import { MockCellService } from '../../services/mock-cell.service';

import { colormap } from '../../constants';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

	public stone: any;

  constructor(private mcs: MockCellService) { 
		this.stone = this.mcs.getMockCell();
		console.log(JSON.stringify(colormap['bg'][this.stone['bg']]));
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
}
