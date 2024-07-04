import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiModule } from '../ui/ui.module';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [UiModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  @Input() input!: boolean;

  @Output() sendInputValue = new EventEmitter<string>()

  on!: boolean;

  fun() {

    // if(this.on == true)
    //   {
    //      this.sendInputValue.emit('Inputswitch is on') 

    //   }
    //   else{
    //     this.sendInputValue.emit('Inputswitch is off') 

    //   }

    this.on ? this.sendInputValue.emit('Inputswitch is on') : this.sendInputValue.emit('Inputswitch is off')




    // this.sendInputValue.emit(this.on)
  }

}
