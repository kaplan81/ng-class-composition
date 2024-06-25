import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { emptyBase } from './mixins/empty';
import { TitleMixin } from './mixins/title.mixin';
import { TitledComponent } from './models/title.model';

export interface AppComponent extends TitledComponent {}
@Component({
  selector: 'cmp-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container" style="width: 75%; margin: 0 auto;">
      <h1>{{ this.title }}</h1>
      <br />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    h1 {
      text-align: center
    }
  `,
})
export class AppComponent extends TitleMixin(
  emptyBase,
  'Testing NG Composition'
) {}
