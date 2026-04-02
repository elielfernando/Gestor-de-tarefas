import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskDetails } from './task-details/task-details';  

export const routes: Routes = [
  { path: 'tasklist', title: 'Lista de Tarefas', component: TaskList },
  {path:'taskdetails/:id', title:'Detalhe de tarefas',component: TaskDetails},
  {path:'', redirectTo:'tasklist', pathMatch:'full' },  
];
