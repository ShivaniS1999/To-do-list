import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';
import { DoingComponent } from './doing/doing.component';
import { MainComponent } from './main/main.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NewComponent } from './new/new.component';
import { MerchantComponent } from './merchant/merchant.component';
import { CustomerComponent } from './customer/customer.component';
import { StoreListComponent } from './CRUD/store-list/store-list.component';
import { AddStoreComponent } from './CRUD/add-store/add-store.component';
import { StoreViewComponent } from './CRUD/store-view/store-view.component';

export const routes: Routes = [
    // {path:'',component:MainComponent},
    // {path:'doing',component:DoingComponent},
    // {path:'done',component:DoneComponent},
    // {path:'main',component:MainComponent},
    // {path:'',component:ParentComponent},
    // {path:'child',component:ChildComponent},
    // {path:'',component:LoginComponent},
    // {path:'forgot',component:ForgotComponent},
    // {path:'new',component:NewComponent}

    // {path:'',component:MerchantComponent},
    // {path:'customer',component:CustomerComponent}

    {path:'',component:StoreListComponent},
    {path:'add-store',component:AddStoreComponent},
    {path:'view-store',component:StoreViewComponent}

];
