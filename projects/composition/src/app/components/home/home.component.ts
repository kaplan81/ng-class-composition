import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutedComponents } from '../../enums/routed.enum';
import { DestroyMixin } from '../../mixins/destroy.mixin';
import { emptyBase } from '../../mixins/empty';
import { TitleMixin } from '../../mixins/title.mixin';
import { RouterCountService } from '../../services/router-count/router-count.service';

// export interface HomeComponent extends TitledComponent {}
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent extends TitleMixin(
  DestroyMixin(emptyBase, () =>
    console.log(
      `${RoutedComponents[
        RoutedComponents.home
      ].toUpperCase()} component was destroyed`
    )
  ),
  RoutedComponents[RoutedComponents.home].toUpperCase(),
  true
) {
  #routerCountService = inject(RouterCountService);
  navigationId: Signal<number> = this.#routerCountService.getStateProp('count');

  goToContact(): void {
    this.#routerCountService.increaseCount(() =>
      console.log(`We are navigating from ${(this as any).title}`)
    );
  }
}
