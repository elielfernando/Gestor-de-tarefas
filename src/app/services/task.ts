import { Injectable } from '@angular/core';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class Task {
  constructor() { }
  private tasks: Array<task> = [];

  getTasks(): Array<task> {
    this.tasks = this.getFromLocalStorage();
    return this.tasks;
  }
  getById(id: number): task | undefined {
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }
  addTask(task: task): void {
    this.tasks.push(task);
    this.saveToLocalStorage();
  }
  updateTask() {
    this.saveToLocalStorage();
  }
  removeTask(task: task): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    //se a tarefa for encontrada, remove do array
    if (index !== -1) {
      this.tasks.splice(index, 1);
      this.saveToLocalStorage();
    }
  }
  private saveToLocalStorage(): void {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
  }
  private getFromLocalStorage(): Array<task> {
    const tasksJson = localStorage.getItem('tasks');
    if (!tasksJson) {

      //não há tarefas salvas
      return new Array<task>();
    }
    return JSON.parse(tasksJson) as Array<task>;
  }
}
