import { ICategory } from "../types/types";
import { request } from '../helpers/utils';


export function fetchCategories() {
 return request<ICategory[]>('https://api.thecatapi.com/v1/categories')
}

