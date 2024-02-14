import type { NextApiRequest, NextApiResponse } from 'next'
import { cookies } from 'next/headers'
 
type ResponseData = {
  message: string
}


export async function GET(
	req: NextApiRequest,
  res: NextApiResponse<ResponseData>
  ) {
  try {
  	const cookieStore = cookies()
  	const currentUser = cookieStore.get('username').value
	return Response.json({ currUser: currentUser })
  	// res.status(200).json({ message: 'Hello from Next.js!' })
  } catch (error) {
  	console.log(error)
    return new Response(null, { status: 500 })
  }
}
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
// 	const x = req.cookies
// 	console.log(x)
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }