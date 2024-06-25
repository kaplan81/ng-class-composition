import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestroyMixin } from '../../mixins/destroy.mixin';
import { emptyBase } from '../../mixins/empty';
import { RouterCountService } from '../../services/router-count/router-count.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent extends DestroyMixin(emptyBase, () =>
  console.log('Home component was destroyed')
) {
  #routerCountService = inject(RouterCountService);
  navigationId: Signal<number> = this.#routerCountService.getStateProp('count');

  goToContact(): void {
    this.#routerCountService.increaseCount(() =>
      console.log('We are navigating to CONTACT')
    );
  }
}
