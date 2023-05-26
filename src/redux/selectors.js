import { createSelector } from '@reduxjs/toolkit';

export const selectAllShops = state => {
  return state.shops.items;
};

export const selectShopsList = createSelector([selectAllShops], shops => {
  return shops.map(({ name, id }) => {
    return { name, id };
  });
});

export const selectChosenShop = state => {
  return state.shops.chosenShop;
};

export const selectMeals = createSelector([selectAllShops, selectChosenShop], (shops, chosenShop) => {
  return shops.reduce((allMeals, shop) => {
    if (shop.name === chosenShop) {
      allMeals.push(...shop.meals);
    }

    return allMeals;
  }, []);
});

export const selectChosenMeals = state => {
  return state.selectedMeals.meals;
};

export const selectOrderState = state => {
  return state.selectedMeals.isOrdered;
}
