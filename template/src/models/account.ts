import { createModel } from '@rematch/core';

export const account = createModel()({
  state: {
    num: 1,
    str: 'ss',
  }, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload: number) {
      state.num = state.num + payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {
      console.log('This is current root state', payload, state);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.account.increment(payload);
    },
    async incrementAsync2(payload: number, state) {
      console.log('This is current root state', payload, state);
      await new Promise((resolve, reject) =>
        setTimeout(
          //@ts-ignore
          reject('123'),
          1000
        )
      );
      dispatch.account.increment(payload * 2);
    },
  }),
});
