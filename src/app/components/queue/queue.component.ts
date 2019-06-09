import { Component, OnInit } from '@angular/core';

import { Stone } from '../../models/stone-model';

import { QueueService } from '../../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  constructor(private qs: QueueService) { }

  ngOnInit() {
  }

	getNext(): any {
		return this.qs.getNext();
	}

}
