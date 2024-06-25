import { Component, Input } from '@angular/core';
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

}
