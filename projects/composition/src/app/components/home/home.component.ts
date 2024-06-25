import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DestroyMixin } from '../../mixins/destroy.mixin';
import { emptyBase } from '../../mixins/empty';

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
  navigationId: WritableSignal<number> = signal<number>(0);
}
