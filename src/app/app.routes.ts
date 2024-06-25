import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { DoingComponent } from './doing/doing.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'doing',component:DoingComponent},
    {path:'done',component:DoneComponent},
    {path:'main',component:MainComponent}

];
