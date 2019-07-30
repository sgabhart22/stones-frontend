const colormap = {
	'bg' : {
		'black': 'rgba(0,0,0,.87)',
		'purple': '#673ab7',
		'yellow': '#ffd740',
		'wild': 'rgba(0,0,0,.87)'
	},
	'fg': {
		'purple': '#673ab7',
		'white': '#fff',
		'yellow': '#ffd740',
		'wild': '#fff'
	}
};

function calcScore(matchDefs: any) {
	let pts = 0;

	if(matchDefs['classA'] === 0) {
		pts = 2;
	} else if(matchDefs['classA'] === 1) {
		if(matchDefs['classB'] === 0) {
			pts = 4;
		} else {
			pts = 6;
		}
	} else if(matchDefs['classA'] === 2) {
		if(matchDefs['classB'] === 2) {
			pts = 15;
		} else {
			pts = 9;
		}
	} else if(matchDefs['classA'] === 3) {
		if(matchDefs['classB'] === 0) {
			pts = 15;
		} else {
			pts = 20;
		}
	} else if(matchDefs['classA'] === 4) {
		pts = 30;
	}

	return pts;
}

export { colormap, calcScore };
