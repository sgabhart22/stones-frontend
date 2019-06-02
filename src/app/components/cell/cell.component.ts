import { Component, OnInit } from '@angular/core';

import { MockCellService } from '../../services/mock-cell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

	public stone: any;

  constructor(private mcs: MockCellService) { 
		this.stone = this.mcs.getEmptyCell();
	}

  ngOnInit() {
  }

	toggle() {
		this.stone = this.stone === 'none' ? 
			this.mcs.getOccupiedCell() : 'none';
	}
}
