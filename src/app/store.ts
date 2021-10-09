import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { categoryReducer, catsReducer, pageReducer, selectedCategoryReducer } from './reducers';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    cats: catsReducer,
    page: pageReducer,
    selectedCategory: selectedCategoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
