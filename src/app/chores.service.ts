import { Injectable } from '@angular/core';
import { Chore } from './chore';
import { User } from './user';
import { ChoreLog } from './chore_log';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  constructor(
    private http: HttpClient) { }

  url = 'http://192.168.1.165:5000/api';

  async getAllChores(): Promise<Chore[]> {
    const data = await fetch(`${this.url}/chores`);
    return await data.json() ?? [];
  }

  async getChoreById(id: number): Promise<Chore | undefined> {
    const data = await fetch(`${this.url}/chores/${id}`);
    return await data.json() ?? {};
  }

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(`${this.url}/users`);
    return await data.json() ?? {};
  }

  async getUserById(id: number): Promise<User | undefined> {
    const data = await fetch(`${this.url}/users/${id}`);
    return await data.json() ?? {};
  }

  async getAllChoreLogs(): Promise<ChoreLog[]> {
    const data = await fetch(`${this.url}/chore_logs`);
    return await data.json() ?? {};
  }

  async getChoreLogs(choreId: number): Promise<ChoreLog[]> {
    const data = await fetch(`${this.url}/chores/${choreId}/logs`);
    return await data.json() ?? {};
  }

  logChore(choreId: number, userId: number) {
    return this.http.post(`${this.url}/chores/${choreId}/log`,
      JSON.stringify({
        "user_id": userId,
      }), { 'headers': { 'content-type': 'application/json' } }).subscribe();
  }

  skipAssignee(choreId: number) {
    return this.http.post(`${this.url}/chores/${choreId}/skip`,
      JSON.stringify({
      }), { 'headers': { 'content-type': 'application/json' } }).subscribe();

  }
}
