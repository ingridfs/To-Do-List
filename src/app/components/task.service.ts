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
  } 

  read() {
    return this.taskObject;
  }

  update(id, description){
    return this.taskObject[id] = Object.assign({}, this.taskObject[description]);
  }

  delete(id){
   return this.taskObject = this.taskObject.filter(task => task.id !== id )
  }
 

}

