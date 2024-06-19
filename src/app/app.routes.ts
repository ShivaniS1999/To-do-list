import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { DoingComponent } from './doing/doing.component';

export const routes: Routes = [
    {path:'',component:TodoComponent},
    {path:'doing',component:DoingComponent},
    {path:'done',component:DoneComponent}

];
