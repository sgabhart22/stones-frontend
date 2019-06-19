import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { BoardComponent } from './components/board/board.component';
import { GameComponent } from './components/game/game.component';
import { SaveComponent } from './components/save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    GameComponent,
    SaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
