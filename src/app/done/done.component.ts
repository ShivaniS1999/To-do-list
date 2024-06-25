import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { UiModule } from '../ui/ui.module';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [UiModule],
  templateUrl: './done.component.html',
  styleUrl: './done.component.scss'
})
export class DoneComponent {
  task: any[] = [];
  @Input() doingMessage!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.doingMessage);
    
    
    this.addMessageToTask(this.doingMessage);
}
addMessageToTask(newMessage: string) {
  if (newMessage) {
    this.task.push(newMessage);
  }
}
   
}

