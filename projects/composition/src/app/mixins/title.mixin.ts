import { TitledComponent } from '../models/title.model';
import { Constructor } from './constructor';

export function TitleMixin<B extends Constructor>(
  Base: B,
  title: string
): Constructor<TitledComponent> & B {
  return class extends Base {
    title: string = title;
  };
}
