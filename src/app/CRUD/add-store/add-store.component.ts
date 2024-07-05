import { Component } from '@angular/core';
import { UiModule } from '../../ui/ui.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private storeSVC: StoreService, private msg: MessageService,
    private router: Router

  ) { }

  ngOnInit() {
    this.storeForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]

    })
  }

  submit() {

    if (this.storeForm.invalid) {
      console.log("Please fill the above form");
      // alert("Please fill the above form")
      this.msg.add({
        severity: 'error',
        detail: 'Please fill the above form'
      })

    }
    else {
      console.log(this.storeForm.value);
      let data = {
        ...this.storeForm.value
      }
      console.log(data);

      this.storeSVC.createStore(data).then((res: any) => {
        console.log(res);
        if (res.status) {

          this.messages = [
            { severity: 'success', summary: 'Store Created Successfully' },


          ];
          this.router.navigate([''])
        }

        // this.msg.add({
        //   severity:'success',
        //   detail:'Store Created Successfully'
        // })


      })

    }


  }

}
