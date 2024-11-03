import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  itemsData: [],
};

const itemSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const itemDetail = action.payload;
      state.itemsData.push({
        id: Date.now().toString(), // Generate a unique ID
        itemName: itemDetail.itemName,
        itemCategory: itemDetail.category,
        date: itemDetail.date,
        description: itemDetail.description,
        contactInfo: itemDetail.contact,
        image: itemDetail.image,
      });
    },
    decreaseQuantityFromCart(state, action) {
      const itemId = action.payload;
      state.itemsData = state.itemsData.filter((item) => item.id !== itemId);
    },
    replaceCart(state, action) {
      state.itemsData = action.payload.itemsData;
    },
  },
});

export default itemSlice.reducer;
export const itemActions = itemSlice.actions;
