import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "";
  private taskObject = [];
  private id: number = 1;

  constructor() { }

  create(task: Task) {
    task.id = this.id++;
    this.taskObject.push(task);
    console.log(this.taskObject);
    
  } 
  read() {
    return this.taskObject;
  }

  delete(id){
  this.taskObject = this.taskObject.filter(task => task.id !== id )
   return this.taskObject;
  }
 

}

