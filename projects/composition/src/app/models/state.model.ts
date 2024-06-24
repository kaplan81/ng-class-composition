import { Signal, WritableSignal } from '@angular/core';

/**
 * Relates to mixin.
 */
export interface State<S> {
  defaultState: WritableSignal<S | null>;
  getStateProp<K extends keyof S>(key: K): Signal<S[K]>;
  resetState(callback?: (state: S) => void): void;
  state: Signal<S>;
  updateState(state: S, callback?: (state: S) => void): void;
  updateStateProp<K extends keyof S>(
    key: K,
    value: S[K],
    callback?: (state: S) => void
  ): void;
}
