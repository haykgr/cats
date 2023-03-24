import { ICat, ICategory } from "../types/types";
import {
  RESET_CATS,
  SET_CATEGORIES,
  SET_CATS,
  SET_PAGE,
  SET_SELECTED_CATEGORY,
} from "./constants";

export interface IState {
  categories: ICategory[];
  cats: ICat[];
}

export function categoryReducer(state: ICategory[] = [], action: any) {
  switch (action.type) {
    case SET_CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
}

export function catsReducer(state: ICat[] = [], action: any) {
  switch (action.type) {
    case SET_CATS:
      return [...state, ...action.payload];
    case RESET_CATS:
      return [...action.payload];
    default:
      return state;
  }
}
export function pageReducer(state: number = 0, action: any) {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}
export function selectedCategoryReducer(
  state: number | null = null,
  action: any
) {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
