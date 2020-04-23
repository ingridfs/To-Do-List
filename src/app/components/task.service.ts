import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];

  constructor() { }

  create(task: Task) {
    this.taskObject.push(task);
  } 

  read() {
    return this.taskObject;
  }

  delete(index){
    this.taskObject.splice(index,1);
  }
}
