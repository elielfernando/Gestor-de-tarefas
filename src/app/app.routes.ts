import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskFilter } from './task-filter/task-filter'; 
import { TaskDetails } from './task-details/task-details';  

export const routes: Routes = [
  { path: 'tasklist', title: 'Lista de Tarefas', component: TaskList },
  {path:'taskdetails', title:'Detalhe de tarefas',component: TaskDetails},
  {path:'', redirectTo:'tasklist', pathMatch:'full' },

  
];