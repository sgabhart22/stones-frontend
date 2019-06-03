export class Stone {
  public bg: string;
  public fg: string;
  public shape: string;

  constructor(bg: string, fg: string, shape: string) { 
    this.bg = bg;
    this.fg = fg;
    this.shape = shape;
  }

  toString(): string {
    return "{ " + this.bg + ", " + this.fg + ", " + this.shape + " }";
  }

	matches(stone: Stone): boolean {
		let matches = 0;

		if(stone.bg === 'wild' || this.bg === 'wild') {
			return true;
		} else {
			if(stone.bg === this.bg) matches++;
			if(stone.fg === this.fg) matches++;
			if(stone.shape === this.shape) matches++;
		}

		return matches > 1;
	}
}
