import { TaskService } from './../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-cards',
  templateUrl: './task-cards.component.html',
  styleUrls: ['./task-cards.component.css']
})
export class TaskCardsComponent implements OnInit {

  tasks:any;
  condicao:boolean = false;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.readTask();
  }
  
  readTask(){
    this.tasks = this.taskService.read();
  }
  
  editTask(){
   this.condicao = true;
  }

  removeTask(index){
    this.taskService.delete(index);
    this.readTask();
  }
  updateTask(id){
    this.taskService.update(id,id.description);
    this.condicao = false;
  }

}
