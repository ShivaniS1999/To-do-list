import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiModule } from '../ui/ui.module';
@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [UiModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {

  @Input() name!:string;
  @Output() lastName = new EventEmitter<string>()

  submitFun(){

    this.lastName.emit("singh")

  }

}
