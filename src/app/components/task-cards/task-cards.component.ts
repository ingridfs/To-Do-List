import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  tasks:any;
  editDescription:boolean = false;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.readTask();
  
  }
  
  readTask(){
    this.tasks = this.taskService.read();
    console.log(this.tasks);
  }
  
  editTask(index){
    console.log(index);
    this.editDescription = true;
  }

  removeTask(index){
    this.taskService.delete(index);
  }
 

}
