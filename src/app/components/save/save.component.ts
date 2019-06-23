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
			console.log('SaveComponent: state is \n' + JSON.stringify(state, null, 2));
			this.state = state;
		});
	}

	saveState() {
		let temp = { 'board': null, 'deck': null, 'queue': null };

		temp['board'] = this.gs.getBoard().getState();
		temp['deck'] = this.gs.getGame().deck;
		temp['queue'] = this.gs.getQueue();

		this.ss.setState(temp);
	}

	getState(): any {
		return JSON.stringify(this.state);
	}
}
