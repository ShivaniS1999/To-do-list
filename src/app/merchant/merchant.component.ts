import { Component } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { CustomerComponent } from "../customer/customer.component";

@Component({
    selector: 'app-merchant',
    standalone: true,
    templateUrl: './merchant.component.html',
    styleUrl: './merchant.component.scss',
    imports: [UiModule, CustomerComponent]
})
export class MerchantComponent {

  checked!: boolean ;

  received!:string

  // receive(data:boolean){

  //    this.received = data

  // }

  receiveString(data:string){

    this.received = data

  }
}
