import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cmp-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="container" style="width: 75%; margin: 0 auto;">
      <br />
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {}
