// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  categories: Category[],

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanity
  res.status(200).json({ name: 'John Doe' })
}
