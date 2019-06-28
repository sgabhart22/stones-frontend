import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

	loadFromDialog(): void {
		const dialogRef = this.dialog.open(LoadDialog, {
			width: '300px'
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(result);
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

  onNoClick(): void {
    this.dialogRef.close();
  }

}
