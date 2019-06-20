import { Component, OnInit } from '@angular/core';

import { SaveService } from '../../services/save.service';
import { GameService } from '../../services/game.service';

import * as writeJson from 'write-json-file';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  constructor(private ss: SaveService,
							private gs: GameService) { }

  ngOnInit() { 
		this.ss.currentState.subscribe(state => {
			console.log('SaveComponent: state is \n' + JSON.stringify(state));
			writeJson('state.json', state);
		});
	}

	saveState() {
		this.ss.setState(this.gs.getBoard().getState());
	}
}
