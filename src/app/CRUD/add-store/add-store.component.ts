import { Component } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Message, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '../../model/store.model';

@Component({
  selector: 'app-add-store',
  standalone: true,
  imports: [UiModule],
  templateUrl: './add-store.component.html',
  styleUrl: './add-store.component.scss'
})
export class AddStoreComponent {
  storeForm!: FormGroup;
  messages: Message[] | any;
  storeEditMode: boolean = false;
  store!: Store;
  id: any;
  show:boolean = true
  constructor(private fb: FormBuilder, private storeSVC: StoreService, private msg: MessageService,
    private router: Router, private route: ActivatedRoute

  ) {

    this.storeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]

    })
   }

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    if(this.id)
      {
        this.storeSVC.getStoreDetailsById(this.id).then((res:any) => {
          console.log(res);
          this.storeEditMode = true;
          this.show = false
          this.storeForm.setValue({
            id:res.id,
            name: res.name,
            description: res.description
          });
        });
      }
      else{
        this.storeEditMode = false;
        this.show = true

      }
     

    
  }

  submit() {

    if (this.storeForm.invalid) {
      console.log("Please fill the above form");
      this.msg.add({
        severity: 'error',
        detail: 'Please fill the above form'
      });
    } else {
      if (this.storeEditMode) {
        console.log(this.storeEditMode, "shivaniiiiiiiiiiiiiiiiii");
        console.log(this.storeForm.value);
        
        this.storeSVC.updateStoreById(this.storeForm.value).then((res: any) => {
          console.log(res, "shivaniiiii");
            this.router.navigate(['']);

        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        console.log(this.storeForm.value);
        let data = {
          ...this.storeForm.value
        };
        console.log(data);

        this.storeSVC.createStore(data).then((res: any) => {
          console.log(res);
          if (res.status) {
            this.store = res[0];
            console.log(this.store);

            this.messages = [
              { severity: 'success', summary: 'Store Created Successfully' }
            ];
            this.router.navigate(['']);
          }
        });
      }
    }

  }

  // if (invalid) {
    
  // } else {

  //   if (edit mode) {
      
  //   } else {
      
  //   }
    
  // }

}
