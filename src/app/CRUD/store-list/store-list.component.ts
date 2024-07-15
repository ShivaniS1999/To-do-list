import { Component, OnInit } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { AddStoreComponent } from "../add-store/add-store.component";
import { ChildComponent } from "../../child/child.component";
import { StoreViewComponent } from "../store-view/store-view.component";


@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [UiModule, MenuModule, AddStoreComponent, ChildComponent, StoreViewComponent],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.scss'
})
export class StoreListComponent implements OnInit{
  store: any[] = [];
  items!: MenuItem[];

  constructor(private storeSVC:StoreService,private router: Router, private msg: MessageService){}
  

  ngOnInit(){
     
      this.storeSVC.getStore().then((res:any)=>{

        this.store = res
         console.log( this.store);
         console.log(res);   
         
      })

    
  
  }
  handleClick(id: any) {
 
    this.items = [
      {
          label: 'Store',
          items: [  
              {
                  label: 'View',
                  icon: 'pi pi-eye',
                  routerLink: ['/view-store'],
                  queryParams: { id: id },
                  queryParamsHandling: 'merge',

              },
              {
                  label: 'Edit',
                  icon: 'pi pi-pencil',
                  routerLink: ['/add-store'],
                  queryParams: { id: id },
                  queryParamsHandling: 'merge',

              },
              {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                  this.deleteFun(id);
                },

            }
          ]
      }
  ];
   
  }

  deleteFun(id:any){
    this.storeSVC.deleteStoreById(id).then((res) => {
      console.log(res);
      if (res.status) {
        this.msg.add({
          severity: 'success',
          detail: 'Store deleted successfully'
        });
        this.store = this.store.filter(store => store.id !== id); // Update the local stores list
      }
    }).catch((err) => {
      console.error(err);
      this.msg.add({
        severity: 'error',
        detail: 'Error deleting store'
      });
    });
      
   
  }
  addStore(){
    this.router.navigate(['/add-store'])
  }

 

}
