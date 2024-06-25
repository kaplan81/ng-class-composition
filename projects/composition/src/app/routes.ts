import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { RoutedComponents } from './enums/routed.enum';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: RoutedComponents[RoutedComponents.contact],
    component: ContactComponent,
  },
];
