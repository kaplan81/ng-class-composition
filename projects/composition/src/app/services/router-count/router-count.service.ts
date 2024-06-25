import { Injectable } from '@angular/core';
import { Constructor } from '../../mixins/constructor';
import { emptyBase } from '../../mixins/empty';
import { StateMixin } from '../../mixins/state.mixin';
import { RourterCountState } from '../../models/router-count-state';
import { routerCountInitial } from './router-count.initial';

@Injectable({
  providedIn: 'root',
})
export class RouterCountService extends StateMixin<
  Constructor,
  RourterCountState
>(emptyBase, routerCountInitial) {
  increaseCount(callback: () => void): void {
    this.updateState({ count: this.state().count + 1 }, callback);
  }
}
