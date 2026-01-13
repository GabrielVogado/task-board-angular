import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {}
