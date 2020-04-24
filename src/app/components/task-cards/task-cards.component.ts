import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  tasks:Task[];


  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.readTask();
  }
  
  readTask(){
    this.tasks = this.taskService.read();
  }
  
  editTask(id){
    this.tasks[id].editable = true;
  }
  
  updateTask(id){
    //this.taskService.update(id, id.description);
    this.tasks[id].editable = false;
  }

  removeTask(id){
    this.taskService.delete(id);
    this.readTask();
  }

}
