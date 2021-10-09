import { ICat, ICategory } from "../types/types"
import { SET_CATEGORIES, SET_CATS, SET_PAGE, RESET_CATS, SET_SELECTED_CATEGORY } from "./constants"


export const setCategories = (categories: ICategory[]) => {
    return {
        type: SET_CATEGORIES,
        payload: categories
    }
}
export const setCats = (cats: ICat[]) => {
    return {
        type: SET_CATS,
        payload: cats
    }
}
export const resetCats = (cats: ICat[]) => {
    return {
        type: RESET_CATS,
        payload: cats
    }
}
export const setPage = (page: number) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}
export const setSelectedCategory = (categoryID: number) => {
    return {
        type: SET_SELECTED_CATEGORY,
        payload: categoryID
    }
}