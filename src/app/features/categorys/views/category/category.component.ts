import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ColorListComponent } from '../../components/color-list/color-list.component';
import { MainListComponent } from '../../components/main-list/main-list.component';
import { AsyncPipe } from '@angular/common';
import { CategoryService } from '../../services/category.service';

const Components = [MainListComponent, ColorListComponent];
const PIPES = [AsyncPipe];
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [...Components, ...PIPES],
  templateUrl: './category.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  private readonly categoryService = inject(CategoryService);

  public categories$ = this.categoryService.getCategories();
}
