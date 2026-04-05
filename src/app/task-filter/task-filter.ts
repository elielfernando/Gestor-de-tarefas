import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-filter.html',
  styleUrls: ['./task-filter.css'],
})
export class TaskFilter {

  filter: string = '';

  @Output() taskfilter = new EventEmitter<string>() ;

  filterTasks() {
    this.taskfilter.emit(this.filter);
  }
}
