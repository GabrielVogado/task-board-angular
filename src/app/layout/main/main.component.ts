import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryComponent } from '../../features/categorys/views/category/category.component';
import { MatDividerModule } from '@angular/material/divider';
import { TaskComponent } from '../../features/task/view/task/task.component';

const COMPONENTS = [CategoryComponent, TaskComponent];
const Modules = [MatDividerModule];
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...COMPONENTS, ...Modules],
  templateUrl: `./main.component.html`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
