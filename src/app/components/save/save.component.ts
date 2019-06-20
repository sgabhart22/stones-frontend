import { Component, OnInit } from '@angular/core';

import { SaveService } from '../../services/save.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

	private state: any;

  constructor(private ss: SaveService,
							private gs: GameService) { }

  ngOnInit() { 
		this.ss.currentState.subscribe(state => {
			console.log('SaveComponent: state is \n' + JSON.stringify(state));
			this.state = state;
		});
	}

	saveState() {
		this.ss.setState(this.gs.getBoard().getState());
	}

	getState(): any {
		return JSON.stringify(this.state);
	}
}
