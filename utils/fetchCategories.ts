import { Category } from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchCategories = async () => {
    const resp = await fetch(`${BASE_URL}/api/categories/getCategories`)
    const data = await resp.json();

    const categories: Category[] = data.categories

    return (categories);
}
