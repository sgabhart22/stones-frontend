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
	}

  ngOnInit() {
  }

	toggle() {
		this.stone = this.stone === 'none' ? 
			this.mcs.getOccupiedCell() : 'none';
	}

	getBg(): any {
		console.log(JSON.stringify(colormap['bg'][this.stone['bg']]));
		return colormap['bg'][this.stone['bg']];
	}
}
