import { Component } from '@angular/core';
import { TaskFilter } from '../task-filter/task-filter';  

@Component({
  selector: 'app-task-list',
  imports: [TaskFilter],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {}
