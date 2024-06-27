import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

   @Input() name!:string; 

   @Output() msg = new EventEmitter<string>();

   submitFun(){

    this.msg.emit("msg from child comp")
   

   }
}
