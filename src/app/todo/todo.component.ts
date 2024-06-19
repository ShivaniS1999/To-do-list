import { Component } from '@angular/core';
import { UiModule } from '../ui/ui.module';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [UiModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

}
