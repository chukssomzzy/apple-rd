// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '../../../types'
import {sanityClient, getCategoriesQuery} from "../../../lib"
import status  from 'http-status-codes'
type Data = {
	categories?: Category[],
	success: boolean,
	error?: any
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const categories = await sanityClient.fetch(getCategoriesQuery)
		res.status(status.OK).json({categories, success: true});
	} catch (e: any) {
		/* handle error */
		res.status(status.INTERNAL_SERVER_ERROR).json({error: e, success: false});
	}
}                                    
