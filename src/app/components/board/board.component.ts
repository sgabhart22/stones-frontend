import { Component, OnInit, Input } from '@angular/core';

import { Board } from '../../shared/board';
import { Stone } from '../../models/stone-model';

import { CellService } from '../../services/cell.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	@Input() board: Board<Stone>;

  constructor(private cs: CellService) { }

  ngOnInit() {
		this.cs.currentLocation.subscribe(coords => {
			if(coords) {
				if(!this.board.getAt(coords['x'], coords['y'])) {
					console.log('Stone can go here. Maybe.');
				} else {
					console.log('Stone def can\'t go here');
				}
			}
		});
  }

	getStone(x: any, y: any) {
		return this.board.getAt(x, y);
	}

	logStone(x: any, y: any) {
		console.log(this.board.getAt(x, y));
	}
}
