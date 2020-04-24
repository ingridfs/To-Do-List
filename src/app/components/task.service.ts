import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private id: number = 0;

  constructor() { }

  create(task: Task) {
    task.id = this.id++;
    this.taskObject.push(task);
    console.log(this.taskObject);
    
  } 

  read() {
    return this.taskObject;
  }

  delete(index){
   this.taskObject.splice(index, 1);
  }
}

