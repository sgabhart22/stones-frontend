import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ClipboardModule } from 'ngx-clipboard';
import { SimpleTimer } from 'ng2-simple-timer';

import { MatDialogModule,
					MatFormFieldModule,
					MatInputModule,
					MatButtonModule,
					MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './components/game/game.component';
import { SaveComponent } from './components/save/save.component';
import { LoadComponent, LoadDialog } from './components/load/load.component';
import { GameOverComponent, GameOverDialog } from './components/game-over/game-over.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    GameComponent,
    SaveComponent,
    LoadComponent,
		LoadDialog,
		GameOverComponent,
		GameOverDialog,
		StatusBarComponent
  ],
  imports: [
    BrowserModule,
		ClipboardModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatToolbarModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers, {
      metaReducers, 
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
		!environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
		SimpleTimer
	],
	entryComponents: [LoadDialog,
										GameOverDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
