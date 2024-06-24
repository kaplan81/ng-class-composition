import {
  Signal,
  WritableSignal,
  computed,
  effect,
  signal,
  untracked,
} from '@angular/core';
import { State } from '../models/state.model';
import { Constructor } from './constructor';

export function StateMixin<B extends Constructor, S>(
  Base: B,
  initialState: S
): Constructor<State<S>> & B {
  return class extends Base {
    #state: WritableSignal<S> = signal<S>(initialState);
    /**
     * Different from the initial state.
     *
     * Due to the glitch-free efect we may never be able to log the inial state.
     *
     * Also many times we will only be interested in the second of third state set
     * e.g. when that state is populated with data from the backend.
     */
    defaultState: WritableSignal<S | null> = signal<S | null>(null);
    state: Signal<S> = this.#state.asReadonly();

    constructor(...args: any[]) {
      super(...args);
      effect(() => {
        this.state();
        untracked(() => {
          /**
           * Whatever action we want to execute
           * whenever the state is updated.
           */
        });
      });
    }

    getStateProp<K extends keyof S>(key: K): Signal<S[K]> {
      return computed<S[K]>(() => this.state()[key]);
    }

    resetState(callback?: (state: S) => void): void {
      if (this.defaultState() !== null) {
        this.updateState(this.defaultState()!, callback);
      } else {
        this.updateState(initialState, callback);
      }
    }

    updateState(state: S, callback?: (state: S) => void): void {
      this.#state.set(state);
      this.#updateCallback(callback);
    }

    updateStateProp<K extends keyof S>(
      key: K,
      value: S[K],
      callback?: (state: S) => void
    ): void {
      this.#state.update((state: S) => ({
        ...state,
        [key]: value,
      }));
      this.#updateCallback(callback);
    }

    #updateCallback(callback?: (state: S) => void): void {
      if (callback !== undefined) {
        callback(this.state());
      }
    }
  };
}
