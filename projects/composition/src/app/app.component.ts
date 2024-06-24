import { Component } from '@angular/core';

@Component({
  selector: 'cmp-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to {{title}}!</h1>

    
  `,
  styles: [],
})
export class AppComponent {
  title = 'composition';
}
