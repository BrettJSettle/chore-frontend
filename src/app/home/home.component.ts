import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoreComponent } from '../chore/chore.component';
import { Chore } from '../chore';
import { User } from '../user';
import { ChoresService } from '../chores.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ChoreComponent
  ],
  template: `
    <section class="results">
      <app-chore
        *ngFor="let chore of choreList"
        [choreId]="chore.id" [users]=userList>
      </app-chore>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  choreList: Chore[] = [];
  userList: User[] = [];
  choresService: ChoresService = inject(ChoresService);

  constructor() {
    this.choresService.getAllChores().then((choreList: Chore[]) => {
      this.choreList = choreList;
    });
    this.choresService.getAllUsers().then((userList: User[]) => {
      this.userList = userList;
    });
  }
}
