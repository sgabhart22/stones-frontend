import { Component, OnInit } from '@angular/core';

import { SaveService } from '../../services/save.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

	private state: any;

  constructor(private ss: SaveService,
							private gs: GameService) { }

  ngOnInit() { 
		this.ss.currentState.subscribe(state => {
			console.log('SaveComponent: state is \n' + JSON.stringify(state, null, 2));
			this.state = state;
		});
	}

	saveState() {
		let temp = { 'board': null, 'deck': null, 'queue': null };

		temp['board'] = this.gs.getBoard().getState();
		temp['deck'] = this.gs.getGame().deck;
		temp['queue'] = this.gs.getQueue();

		this.ss.setState(temp);
	}

	getState(): any {
		return JSON.stringify(this.state);
	}

	// Mock: test
	loadMockState() { 
		let state = {
			"board": {
				"0": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"1": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"2": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"3": [
					"none",
					"none",
					{
						"bg": "black",
						"fg": "green",
						"shape": "circle"
					},
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"4": [
					"none",
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					"none",
					"none",
					"none",
					"none",
					{
						"bg": "black",
						"fg": "green",
						"shape": "star"
					},
					"none",
					"none",
					"none"
				],
				"5": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"6": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"7": [
					"none",
					{
						"bg": "green",
						"fg": "blue",
						"shape": "triangle"
					},
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					{
						"bg": "green",
						"fg": "blue",
						"shape": "square"
					},
					"none"
				],
				"8": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none"
				],
				"9": [
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					"none",
					{
						"bg": "red",
						"fg": "green",
						"shape": "triangle"
					},
					"none"
				]
			},
			"deck": {
				"stones": [
					{
						"bg": "green",
						"fg": "blue",
						"shape": "triangle"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "circle"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "square"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "circle"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "square"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "triangle"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "star"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "circle"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "circle"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "star"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "circle"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "triangle"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "circle"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "triangle"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "star"
					},
					{
						"bg": "wild",
						"fg": "wild",
						"shape": "wild"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "circle"
					},
					{
						"bg": "black",
						"fg": "red",
						"shape": "square"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "triangle"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "star"
					},
					{
						"bg": "red",
						"fg": "green",
						"shape": "circle"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "circle"
					},
					{
						"bg": "green",
						"fg": "blue",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "red",
						"fg": "blue",
						"shape": "square"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "triangle"
					},
					{
						"bg": "green",
						"fg": "red",
						"shape": "star"
					},
					{
						"bg": "black",
						"fg": "green",
						"shape": "triangle"
					}
				]
			},
			"queue": [
				{
					"bg": "black",
					"fg": "green",
					"shape": "circle"
				},
				{
					"bg": "green",
					"fg": "blue",
					"shape": "square"
				},
				{
					"bg": "wild",
					"fg": "wild",
					"shape": "wild"
				},
				{
					"bg": "red",
					"fg": "green",
					"shape": "circle"
				},
				{
					"bg": "red",
					"fg": "green",
					"shape": "triangle"
				},
				{
					"bg": "green",
					"fg": "red",
					"shape": "circle"
				}
			]
		};

		this.gs.loadFromJson(state);
	}

	loadState(state: any) {
		this.gs.loadFromJson(state);
	}
}
