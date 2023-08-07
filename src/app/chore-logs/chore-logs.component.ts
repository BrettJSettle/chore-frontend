import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChoresService } from '../chores.service';
import { Chore } from '../chore';
import { ChoreLog } from '../chore_log';


@Component({
  selector: 'app-chore-logs',
  templateUrl: './chore-logs.component.html',
  styleUrls: ['./chore-logs.component.css']
})
export class ChoreLogsComponent {
  choreLogs: ChoreLog[] = [];
  chore?: Chore | undefined;

  constructor(
    private route: ActivatedRoute,
    private choreService: ChoresService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // Load chore
      this.choreService.getChoreById(id).then(chore => {
        this.chore = chore;
      });
      // Load chore history.
      this.choreService.getChoreLogs(id).then((value) => {
        this.choreLogs = value;
      });
    } else {
      this.choreService.getAllChoreLogs().then((value) => {
        this.choreLogs = value;
      });
    }
  }
}
