import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { DoingComponent } from './doing/doing.component';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {path:'',component:MainComponent},
    {path:'doing',component:DoingComponent},
    {path:'done',component:DoneComponent},
    {path:'main',component:MainComponent},
    // {path:'',component:ParentComponent},
    // {path:'child',component:ChildComponent}

];
