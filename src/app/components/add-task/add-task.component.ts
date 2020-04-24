import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TaskService } from './../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  public input:Task = {
    description: '',
    editing: false
  };

  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
  }

  getTask() {
    let sendInfo = Object.assign({}, this.input);
    this.taskService.create(sendInfo);
    this.input.description = "";
  }
}
