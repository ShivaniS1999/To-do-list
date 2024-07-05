import { Component, OnInit } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [UiModule,MenuModule],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.scss'
})
export class StoreListComponent implements OnInit{
  store: any[] = [];
  items!: MenuItem[];

  constructor(private storeSVC:StoreService,private router: Router){}
  

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
                  routerLink: ['/customer/customeradd'],


              },
              {
                label: 'Delete',
                icon: 'pi pi-trash',

            }
          ]
      }
  ];
   
  }
  addStore(){
    this.router.navigate(['/add-store'])
  }

 

}
