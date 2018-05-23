export class TodoTaskClass {
    taskID: number;
    taskName: string;
    taskComments?: string;
    taskDue?: DateTimeFormat;
    completed: boolean = false;
    flagged?: boolean = false
    createdBy?: string
}
