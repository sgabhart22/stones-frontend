import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GameService } from '../../../game/services/game.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  constructor(public dialog: MatDialog,
						  private gs: GameService) { }

	loadFromDialog(): void {
		const dialogRef = this.dialog.open(LoadDialog, {
			width: '30%'
		});

		dialogRef.afterClosed().subscribe(result => {
			this.gs.loadFromJson(JSON.parse(result));

		});
	}

  ngOnInit() {
  }

}

@Component({
  selector: 'load-dialog',
  templateUrl: 'load-dialog.html',
})
export class LoadDialog {

  constructor(
    public dialogRef: MatDialogRef<LoadDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


}
