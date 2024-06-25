import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { emptyBase } from './mixins/empty';
import { TitleMixin } from './mixins/title.mixin';
import { TitledComponent } from './models/title.model';

/**
 * Tell ngc about new properties.
 */
export interface AppComponent extends TitledComponent {}
@Component({
  selector: 'cmp-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container">
      <h1>{{ this.title }}</h1>
      <br />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: `
    .container {
      width: 75%;
      margin: 0 auto;
      h1 {
        text-align: center
      }
    }
  `,
})
export class AppComponent extends TitleMixin(
  emptyBase,
  'Testing NG Composition'
) {}
