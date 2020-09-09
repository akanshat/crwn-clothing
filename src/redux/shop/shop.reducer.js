import SHOP_DATA from "./shop.data";

const INITTIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITTIAL_STATE, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default shopReducer;
