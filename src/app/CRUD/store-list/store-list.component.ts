import { Component, OnInit } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [UiModule],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.scss'
})
export class StoreListComponent implements OnInit{

  constructor(private storeSVC:StoreService,private router: Router){}
  store: any[] = [];

  ngOnInit(){
     
      this.storeSVC.getStore().then((res:any)=>{

        this.store = res
         console.log( this.store);
         console.log(res);   
         
      })
  
  }

  addStore(){
    this.router.navigate(['/add-store'])
  }

}
