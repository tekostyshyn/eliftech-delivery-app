export const selectShops = state => {
  return state.shops.items.map(({ name, id }) => {
    return { name, id };
  });
};

export const selectMeals = value => state => {
  return state.shops.items.reduce((allMeals, shop) => {
    if (shop.name === value) {
      allMeals.push(...shop.meals);
    }

    return allMeals;
  }, []);
};

export const selectChosenMeals = state => {
  return state.selectedMeals;
};
