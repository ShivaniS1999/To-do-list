import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-doing',
  standalone: true,
  imports: [UiModule],
  templateUrl: './doing.component.html',
  styleUrl: './doing.component.scss'
})

export class DoingComponent implements OnInit, OnChanges {

  @Input() message!: string;
  @Output() doingMessageEvent = new EventEmitter<string>();

  task: any[] = [];
  data!: string;

  constructor( private svc:SharedServiceService){}
  ngOnInit(): void {
    this.svc.currentData.subscribe(data => this.data = data);

  }

  ngOnChanges(changes: SimpleChanges): void {
    
      this.addMessageToTask(this.message);
  }
  addMessageToTask(newMessage: string) {
    if (newMessage) {
      this.task.push(newMessage);
    }
  }
  done(rowIndex:any){
    console.log( typeof this.task[rowIndex]);
    this.doingMessageEvent.emit(this.task[rowIndex]);

  }
  
}
