import React from 'react'
import { Product } from '../../types'
import Image from "next/image"
import { urlFor } from '../../lib'

type Props = {
    product: Product,
    key: string,
}

const Products = ({product}: Props) => {

  return (
    <div>
        <div>
            <Image 
                src = {urlFor(product.image[0]).url()}  
                objectFit = "contain"
                layout = "fill"
            />
        </div>
    </div>
  )
}

export default Products
