import React from "react"
import { Product } from "../../types"
import Image from "next/image"
import { urlFor } from "../../lib"
import { ShoppingCartIcon } from "@heroicons/react/outline"
import {useDispatch} from "react-redux"
import { addToCart } from "../../features"
import toast from "react-hot-toast"

type Props = {
    product: Product
}

const Products = ({product}: Props) => {
    /** Hooks **/
    const dispatch = useDispatch()
    /** Add To Cart **/
    const addToCartFn = () => {
        dispatch(addToCart(product))
        toast.success(`${product.title} added to basket`, {
            position: "bottom-center",
        })
    }
    return (
        <div className = "flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10">
            <div className = "relative h-64 w-full md:h-72">
                <Image 
                    src = {urlFor(product.image[0]).url()}  
                    objectFit = "contain"
                    layout = "fill"
                />
            </div>
            <div className = "flex flex-1 items-center justify-between space-x-3">
                <div className = "space-y-2 text-xl text-white md:text-2xl ">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
                <div className = "shoppingCart" onClick = {addToCartFn}>
                    <ShoppingCartIcon className = "h-8 w-8 text-white"/>
                </div>
            </div>
        </div>
    )
}

export default Products
