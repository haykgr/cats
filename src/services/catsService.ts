
import { ICat } from "../types/types";
import { request } from '../helpers/utils';


export function fetchCats(limit: number, page?: number, category_ids?: number) {
 return request<ICat[]>(`https://api.thecatapi.com/v1/images/search?limit=${limit}${page ? `&page=${page}` : ""}${category_ids ? `&category_ids=${category_ids}` : ''}`)
}
