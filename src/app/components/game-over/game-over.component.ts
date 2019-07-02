import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

	private result: string;
	private detail: string;

  constructor(private gs: GameService,
							public dialog: MatDialog) { }

	openDialog(): void {
		const dialogRef = this.dialog.open(GameOverDialog, {
			width: '30%',
			data: { 'result': this.result,
							'detail': this.detail }
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result) {
				this.gs.newGame();
				this.gs.setNewGame(true);
			}
		});
	}
  
	ngOnInit() {
  	this.gs.isGameOver.subscribe(gameStatus => {
			if(gameStatus) {
				console.log('GameOverComponent received ' + gameStatus);
				if(gameStatus === 'win') {
					this.result = 'Winner!!!';
					this.detail = 'Congratulations, you placed all the Stones!';
				} else {
					this.result = 'Game Over...';
					this.detail = 'The next Stone will not fit on the Board.';
				}

				this.openDialog();
			}
		});
	}

}

@Component({
  selector: 'game-over-dialog',
  templateUrl: 'game-over-dialog.html',
})
export class GameOverDialog {

  constructor(
    public dialogRef: MatDialogRef<GameOverDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

}
