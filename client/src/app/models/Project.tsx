import { Ticket } from "./Ticket";

export interface Project {
  id: number;
  title: string;
  projectOwner: string;
  tickets?: Ticket[];
}
