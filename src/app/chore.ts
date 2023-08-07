import { ChoreLog } from "./chore_log";

export interface ChoreConfig {
  users : number[],
  interval? : number | undefined,
}

export interface Chore {
  id: number;
  name: string;
  description: string
  assignee: number
  config: ChoreConfig
  latest?: ChoreLog
}