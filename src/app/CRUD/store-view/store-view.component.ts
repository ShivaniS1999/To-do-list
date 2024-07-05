import { Component, OnInit } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../model/store.model';

@Component({
  selector: 'app-store-view',
  standalone: true,
  imports: [UiModule],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.scss'
})
export class StoreViewComponent implements OnInit{

  store!: Store;
  id:any;

  constructor(private storeSVC:StoreService,    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    console.log(this.id);
    if(this.id)
      {
        this.viewData();

      }
    
  }

  async viewData() {
    this.storeSVC.getStoreDetailsById(this.id).then((res:any)=>{
      this.store = res;
      console.log(this.store );
      

    })
      .catch((err) => {
        console.log(err);
      });
  }

 

}
