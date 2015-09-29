import { createSelector } from 'reselect';

const state = {
  items: [
    {
      id: '1234',
      value: 10
    },
    {
      id: '234',
      value: 15
    },
    {
      id: '234',
      value: 65
    },
    {
      id: '234',
      value: 35
    },
    {
      id: '567',
      value: 25
    }
  ],
  taxPercent: 15
};

const shopItemsSelector = state => state.items;
const taxPercentSelector = state => state.taxPercent;

const subtotalSelector = createSelector(
  [
    shopItemsSelector
  ],
  items => items.reduce((acc, item) => acc + item.value, 0)
);

const taxSelector = createSelector(
  [
    subtotalSelector,
    taxPercentSelector
  ],
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
);

export const totalSelector = createSelector(
  [
    subtotalSelector,
    taxSelector
  ],
  (subtotal, tax) => ({total: subtotal + tax})
);

console.log('Provided this state :: \n', state);

console.log('The subtotal is :: ', subtotalSelector(state));
console.log('The tax is :: ', taxSelector(state));
console.log('The total is :: ', totalSelector(state));
