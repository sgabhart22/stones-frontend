import { Component, OnInit } from '@angular/core';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(private gs: GameService) { }

  ngOnInit() {
  	this.gs.isGameOver.subscribe(gameStatus => {
			console.log('GameOverComponent received ' + gameStatus);
		});
	}

}
