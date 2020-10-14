import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './test.actions';

export const initialState = 0;

const _testReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function testReducer(state, action) {
  return _testReducer(state, action);
}