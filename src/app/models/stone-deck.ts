import { Stone } from './stone-model';

export class StoneDeck {

  stones: Stone[];

  constructor() {
    this.stones = [];
  
    this.buildDeck();
    this.shuffle();
  }

  buildDeck() {
    let shapes = ['circle', 'triangle', 'square', 'star'];
    let pairings = [
      {'bg': 'black', 'fg': 'red'},
      {'bg': 'black', 'fg': 'green'},
      {'bg': 'red', 'fg': 'green'},
      {'bg': 'red', 'fg': 'blue'},
      {'bg': 'green', 'fg': 'blue'},
      {'bg': 'green', 'fg': 'red'}
    ];
    
    pairings.forEach(pairing => {
      shapes.forEach(shape => {
        for(var i: number = 0; i < 3; i++) {
          this.stones.push(new Stone(pairing['bg'], pairing['fg'], shape));
        }
      });
    });

    for(var i: number = 0; i < 12; i++) {
      this.stones.push(new Stone('wild', 'wild', 'wild'));
    }
 
  }

  shuffle() {
    let m: number = this.stones.length, i, t;

    while(m) {
      i = Math.floor(Math.random() * m--);

      t = this.stones[m];
      this.stones[m] = this.stones[i];
      this.stones[i] = t;
    }
  }

	pop(): Stone {
		return this.stones.pop();
	}
	
	push(s: Stone) {
		this.stones.push(s);
	}

	hasNext(): boolean {
		return this.stones.length > 0;
	}
}
