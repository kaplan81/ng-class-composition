import { DestroyRef, inject } from '@angular/core';
import { Constructor } from './constructor';

export function DestroyMixin<B extends Constructor>(
  Base: B,
  callback: () => void
): Constructor & B {
  return class extends Base {
    #destroyRef = inject(DestroyRef);
    constructor(...args: any[]) {
      super();
      this.#destroyRef.onDestroy(callback);
    }
  };
}
