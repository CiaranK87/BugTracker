export interface Ticket {
  id: number;
  title: string;
  description: string;
  assigned: string;
  submitter: string;
  priority: string;
  status: string;
  type?: string;
  created: string;
  updated: string;
  project: string;
}
