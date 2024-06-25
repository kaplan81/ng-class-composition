import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterCountService } from '../../services/router-count/router-count.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  #routerCountService = inject(RouterCountService);

  goToHome(): void {
    this.#routerCountService.increaseCount(() =>
      console.log('We are navigating to HOME')
    );
  }
}
