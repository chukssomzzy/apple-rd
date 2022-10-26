import {groq} from 'next-sanity'

export const getCategoriesQuery = groq`*[_type == "category"]
{
    _id,
    ...
}`

export const getProductsQuery = groq`*[_type == "product"]
{
    _id,
    ...
} | order(_createdAt asc)`
