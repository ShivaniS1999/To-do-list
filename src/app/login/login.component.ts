import { Component } from '@angular/core';
import { ForgotComponent } from "../forgot/forgot.component";
import { UiModule } from '../ui/ui.module';
@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ForgotComponent,UiModule]
})
export class LoginComponent {

  firstName:string = 'shivani'

  fullName!:string;
  submitFun(data:string){

    this.fullName = data


  }

}
