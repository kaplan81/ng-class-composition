import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
