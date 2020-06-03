import { Cell } from '../../../shared/cell';

export class Board<T> {
  rows: number;
  columns: number;

  cells: Cell<T>[][];
	state: any;
	
	occupants: number;

  constructor(r: number, c: number) { 
    this.rows = r;
    this.columns = c;
    this.cells = [];
		this.state = {};
		this.occupants = 0;

    for(var i: number = 0; i < this.rows; i++) {
    this.cells[i] = [];
		this.state[i] = [];
      for(var j: number = 0; j < this.columns; j++) {
        this.cells[i][j] = new Cell();
				this.state[i][j] = 'none';
      }
    }

  }

  getDimensions(): Object {
    return {
      'rows': this.rows,
      'columns': this.columns
    };
  }

  setAt(x: number, y: number, piece: T) {
    if(!this.cells[x][y].getMember()) {
			this.cells[x][y].setMember(piece);
			this.state[x][y] = piece;

			this.occupants++;
		}
  }

  getAt(x: number, y: number): T {
    return this.cells[x][y].getMember();
  }

	getState(): any {
		return this.state;
	}

	getNeighbors(x: number, y: number): any {
		let neighbors = [];

		if(x - 1 >= 0) {
			neighbors.push({ 'x': x - 1, 'y': y });
		}
		
		if(x + 1 < this.rows) {
			neighbors.push({ 'x': x + 1, 'y': y });
		}

		if(y - 1 >= 0) {
			neighbors.push({ 'x': x, 'y': y - 1 });
		}
		
		if(y + 1 < this.columns) {
			neighbors.push({ 'x': x, 'y': y + 1 });
		}

		return neighbors;
	}

	hasNoNeighbors(x: any, y: any): boolean {
		let isolated = true;
		
		this.getNeighbors(x, y).forEach(neighbor => {
			if(this.getAt(neighbor['x'], neighbor['y'])) isolated = false;
		});

		return isolated;
	}

	getOccupants(): number {
		return this.occupants;
	}
}
