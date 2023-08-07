import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { ChoresService } from '../chores.service';
import { User } from '../user';
import { Chore } from '../chore';

@Component({
  selector: 'app-chore',
  standalone: true,
  imports: [
    RouterModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgFor,
    NgIf,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './chore.component.html',
  styleUrls: ['./chore.component.css'],
})

export class ChoreComponent {
  choresService: ChoresService = inject(ChoresService);
  chore: Chore = { id: 1, name: '', description: '', assignee: 0, config: {users: []} };

  @Input() choreId!: number;
  @Input() users!: User[];

  choreForm = new FormGroup({
    user_id: new FormControl(1),
    chore_id: new FormControl(0),
  })

  ngOnInit() {
    this.choresService.getChoreById(this.choreId).then(chore => {
      if (chore !== undefined) {
        this.chore = chore;
        this.choreForm.setValue({ user_id: this.chore.assignee, chore_id: this.chore.id })
      }
    })
  }

  getHint() {
    if (!this.chore.latest) {
      return "";
    }
    let date = this.chore.latest.completion_date;
    date = date.substring(0, date.length - 13);
    return `Previously ${this.chore.latest.user.name} on ${date}`
  }

  logChore() {
    // console.log(this.choreForm.value)
    const user_id = this.choreForm.getRawValue()['user_id'] ?? -1;
    if (user_id < 0) {
      console.error("Invalid user id")
    }
    const sub = this.choresService.logChore(this.chore.id, user_id);
    sub.add(() => {
      this.ngOnInit();
  });
  }

  skip() {
    const sub = this.choresService.skipAssignee(this.chore.id);
    sub.add(() => {
      this.ngOnInit();
    })
  }
}
