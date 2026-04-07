import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() { }
  
  // Array que guarda todas as tarefas
  private tasks: Array<Task> = [];
  
  // Retorna todas as tarefas
  getTasks(): Array<Task> {
    this.tasks = this.getFromLocalStorage();
    return this.tasks;
  }
  // Busca uma tarefa pelo ID
  getById(id: number): Task | undefined {
    this.tasks = this.getFromLocalStorage();
    const task = this.tasks.find((task) => task.id === id);
    return task;
  }
  addTask(task: Task): void {
    if (task.id === 0) {
      task.id = Date.now();
    }
    this.tasks.push(task);
    this.saveToLocalStorage();
  }
  updateTask(task?: Task) {
    if (task) {
      const index = this.tasks.findIndex(t => t.id === task.id);
      if (index !== -1) {
        this.tasks[index] = task;
      }
    }
    this.saveToLocalStorage();
  }
  removeTask(task: Task): void {
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
  private getFromLocalStorage(): Array<Task> {
    const tasksJson = localStorage.getItem('tasks');
    if (!tasksJson) {

      //não há tarefas salvas
      return new Array<Task>();
    }
    return JSON.parse(tasksJson) as Array<Task>;
  }
}
