import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
    selector: 'app-parent',
    standalone: true,
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    imports: [ChildComponent]
})
export class ParentComponent {

  firstName:string = 'shivani'
  new!:string;
  parentFun(data:string){


    this.new = data
  }

}
