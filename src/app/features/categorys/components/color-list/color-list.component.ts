import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CategoryService } from '../../services/category.service';
import { categoryBackgroundColors } from '../../constants/category-colors';

const Modules = [MatDividerModule];
@Component({
  selector: 'app-color-list',
  standalone: true,
  imports: [...Modules],
  templateUrl: './color-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorListComponent {
  private readonly categoryService = inject(CategoryService);

  public categories = this.categoryService.categories;

  public categoryBackgroundColors = categoryBackgroundColors;
}
