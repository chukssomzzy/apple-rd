import {BASE_URL} from "."
import {Product} from "../types"

export const fetchProducts = async() => 
{
    const res = await fetch(`${BASE_URL}/api/product/getProducts`)
    const data = await res.json()
    const products: Product[] = data.products

    return (products);
}
