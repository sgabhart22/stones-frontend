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

  constructor(private gs: GameService,
							public dialog: MatDialog) { }

	openDialog(): void {
		const dialogRef = this.dialog.open(GameOverDialog, {
			width: '30%',
			data: { 'result': this.result }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
		});
	}
  
	ngOnInit() {
  	this.gs.isGameOver.subscribe(gameStatus => {
			if(gameStatus) {
				console.log('GameOverComponent received ' + gameStatus);
				this.result = gameStatus === 'win' ? 'Winner!!!' : 'Game Over...';

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
