import { Component } from '@angular/core';
import { ForgotComponent } from "../forgot/forgot.component";
import { UiModule } from '../ui/ui.module';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ForgotComponent,UiModule]
})
export class LoginComponent {

  firstName:string = 'shivani'
  constructor(private router: Router,private  sharedService: SharedDataService) {}


  fullName!:string;
  submitFun(data:string){

    this.fullName = data


  }
  callFun(){
    console.log("shivaniiiiiiiii");
    this.router.navigate(['/forgot']);
    
  }

  sendData(){
    

    const data = "shivani";
    console.log(data);


      this.sharedService.setData(data)
      // this.router.navigate(['/forgot']);

  }

}
