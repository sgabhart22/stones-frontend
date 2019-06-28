import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';

import { MatDialogModule,
					MatFormFieldModule,
					MatInputModule,
					MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './components/game/game.component';
import { SaveComponent } from './components/save/save.component';
import { LoadComponent, LoadDialog } from './components/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    GameComponent,
    SaveComponent,
    LoadComponent,
		LoadDialog
  ],
  imports: [
    BrowserModule,
		ClipboardModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		BrowserAnimationsModule
  ],
  providers: [],
	entryComponents: [LoadDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
