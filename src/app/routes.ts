import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoreLogsComponent } from './chore-logs/chore-logs.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'chores/:id',
    component: ChoreLogsComponent,
    title: 'Chore Logs'
  }
];

export default routeConfig;
