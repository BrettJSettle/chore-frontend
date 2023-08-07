import { Chore } from './chore';
import { User } from './user';

export interface ChoreLog {
    user: User;
    chore: Chore;
    completion_date: string;
}