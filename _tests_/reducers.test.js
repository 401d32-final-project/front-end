import reducer from '../store/reducers';

describe('Testing reducers', () => {
  it('Runs our get Properly', () => {
    let initialState = {};
    let action = {
      type: 'GET',
      payload: { name: 'jacob' },
    }

    expect(reducer(initialState, action)).toEqual(action.payload);
  });
});


let initialState = { results: [] };

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
};

import reducers from '../src/'


