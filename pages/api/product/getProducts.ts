 // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category, Product } from '../../../types'
import {sanityClient, getProductsQuery} from "../../../lib"
import status  from 'http-status-codes'
type Data = {
    products?: Product[],
    success: boolean,
    error?: any 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try {
    
    const products = await sanityClient.fetch(getProductsQuery)
    res.status(status.OK).json({products, success: true});
    } catch (e: any)
    {
        res.status(status.INTERNAL_SERVER_ERROR).json({error: e, success:false});
    }
}
