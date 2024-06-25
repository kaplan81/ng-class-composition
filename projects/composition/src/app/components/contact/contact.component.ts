import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
  styleUrl: './contact.component.scss',
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
