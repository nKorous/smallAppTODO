import { Component, OnInit } from '@angular/core';
import { TodoTaskClass } from '../shared/classes/todo-task-class';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  taskList = []
  newTask = {}
  taskNum: number = 1

  taskName: string
  taskComment: string
  taskDue

  taskCreatedBy = this._storageService.getMyInfo()

  constructor(private _storageService: StorageService) { }

  ngOnInit() {
  }

  addTask(taskName: string, taskComments?: string, taskDue?  ){
    let taskInfo: TodoTaskClass = {
      taskID: this.taskNum,
      taskName: taskName,
      taskComments: taskComments || '',
      taskDue: taskDue || '',
      completed: false,
      flagged: false,
      createdBy: this.taskCreatedBy
    }

    this.taskList.push(taskInfo)

    this.taskNum = this.taskNum + 1

    this.taskName = ''
    this.taskComment = ''
    this.taskDue = ''
    }

}
