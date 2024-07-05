import { Component } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-store',
  standalone: true,
  imports: [UiModule],
  templateUrl: './add-store.component.html',
  styleUrl: './add-store.component.scss'
})
export class AddStoreComponent {
  storeForm!: FormGroup;
  constructor(private fb: FormBuilder, private storeSVC:StoreService, private msg: MessageService,

  ){}

  ngOnInit(){
    this.storeForm = this.fb.group({
      id: ['',Validators.required],
      name:['',Validators.required],
    description:['',Validators.required]
      
  })}

  submit(){

    if(this.storeForm.invalid)
      {
        console.log("Please fill the above form");
        // alert("Please fill the above form")
        this.msg.add({
          severity:'error',
          detail:'Please fill the above form'
        })

      }
      else{
        console.log(this.storeForm.value);
        let data = {
          ...this.storeForm.value
        }
        console.log(data);
        
       this.storeSVC.createStore(data).then((res:any)=>{
        console.log(res);
         
        this.msg.add({
          severity:'success',
          detail:'Store Created Successfully'
        })


       })

      }
            

  }

}
