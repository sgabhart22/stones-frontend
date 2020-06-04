import { Stone } from './stone';

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
      {'bg': 'black', 'fg': 'purple'},
      {'bg': 'black', 'fg': 'yellow'},
      {'bg': 'purple', 'fg': 'yellow'},
      {'bg': 'purple', 'fg': 'white'},
      {'bg': 'yellow', 'fg': 'white'},
      {'bg': 'yellow', 'fg': 'purple'}
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

	size(): number {
		return this.stones.length;
	}

	public loadFrom(deckState: any) {
		this.stones = [];

		deckState['stones'].forEach(stone => {
			this.stones.push(new Stone(stone['bg'], stone['fg'], stone['shape']));
		});

	}
}
