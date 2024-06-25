import { Component } from '@angular/core';
import { TodoComponent } from "../todo/todo.component";
import { DoingComponent } from "../doing/doing.component";
import { DoneComponent } from "../done/done.component";
import { UiModule } from '../ui/ui.module';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [TodoComponent, DoingComponent, DoneComponent,UiModule]
})
export class MainComponent {
    message: string='';
    doingMsg:string='';
    receiveMessage($event: string) {
        console.log($event);
        
        this.message = $event;
        console.log(this.message);
        
      }

      receiveDoingMsg($event: any) {
        console.log($event);
        
        this.doingMsg = $event;
        
      }
      
}
