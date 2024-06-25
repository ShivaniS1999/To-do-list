import { Component, EventEmitter, Output } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [UiModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  task: any[] = [];
  taskForm!: FormGroup;
  @Output() messageEvent = new EventEmitter<string>();

constructor(    private fb: FormBuilder,
){}
  ngOnInit() {
    this.taskForm = this.fb.group({
      taskName: [''],

  })}
  add(){
       console.log(this.taskForm.value.taskName);
       if (this.taskForm.valid) {
        this.task.push(this.taskForm.value.taskName);
        this.taskForm.reset()
      }
  }
  doing(rowIndex:any){
    console.log(this.task[rowIndex]);
    this.messageEvent.emit(this.task[rowIndex]);

  }
}
