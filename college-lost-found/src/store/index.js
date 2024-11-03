import { configureStore } from "@reduxjs/toolkit";

import items from "./items";
const store = configureStore({
  reducer: { items: items },
});

export default store;
