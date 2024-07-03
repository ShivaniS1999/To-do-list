import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SharedDataService } from '../shared-data.service';
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

  receivedData:any;

  constructor(private sharedService: SharedDataService){}

  ngOnInit() {
    this.receivedData = this.sharedService.getData();
    console.log(this.receivedData);
    
  }
  submitFun(){

    this.lastName.emit("singh")

  }
  clearFun(){
    localStorage.clear()
  }

}
