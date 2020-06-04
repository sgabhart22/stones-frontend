export class Stone {
  public bg: string;
  public fg: string;
  public shape: string;

	public matchClass: string;

  constructor(bg: string, fg: string, shape: string) { 
    this.bg = bg;
    this.fg = fg;
    this.shape = shape;
  }

  toString(): string {
    return "{ " + this.bg + ", " + this.fg + ", " + this.shape + " }";
  }

	matches(stone: Stone): boolean {
		this.matchClass = '';
		let matches = 0;

		if(stone.bg === 'wild' || this.bg === 'wild') {
			this.matchClass = 'classB';
			return true;
		} else {
			if(stone.bg === this.bg) matches++;
			if(stone.fg === this.fg) matches++;
			if(stone.shape === this.shape) matches++;
		}

		if(matches === 2) this.matchClass = 'classA';
		if(matches === 3) this.matchClass = 'classB';

		return matches > 1;
	}
}
