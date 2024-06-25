import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutedComponents } from '../../enums/routed.enum';
import { DestroyMixin } from '../../mixins/destroy.mixin';
import { emptyBase } from '../../mixins/empty';
import { TitleMixin } from '../../mixins/title.mixin';
import { RouterCountService } from '../../services/router-count/router-count.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  // providers: [
  //   { provide: RouterCountService, useFactory: () => new RouterCountService() },
  // ],
  standalone: true,
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent extends TitleMixin(
  DestroyMixin(emptyBase, () =>
    console.log(
      `${RoutedComponents[
        RoutedComponents.contact
      ].toUpperCase()} component was destroyed`
    )
  ),
  RoutedComponents[RoutedComponents.home].toUpperCase()
) {
  #routerCountService = inject(RouterCountService);

  goToHome(): void {
    this.#routerCountService.increaseCount(() =>
      console.log(`We are navigating to ${(this as any).title}`)
    );
  }
}
