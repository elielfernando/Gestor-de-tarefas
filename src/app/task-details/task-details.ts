import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/TaskService';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './task-details.html',
  styleUrls: ['./task-details.css'],
})
export class TaskDetails implements OnInit {

  task?: Task;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    } else {
      this.task = this.taskService.getById(Number(id));

      if (this.task === undefined) {
        this.navigateBack();
      }
    }
  }
  save() {
    this.taskService.updateTask(this.task!);
    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/tasklist'],{relativeTo: this.route.parent}).then();
  }
}
