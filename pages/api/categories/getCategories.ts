// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '../../../types'
import {sanityClient, getCategoriesQuery} from "../../../lib"
import status  from 'http-status-codes'
type Data = {
    categories: Category[],
    success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const categories = await sanityClient.fetch(getCategoriesQuery)
    res.status(status.OK).json({categories, success: true});
}                                    
