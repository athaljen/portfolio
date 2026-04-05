// send mail api route
import type { NextApiRequest, NextApiResponse } from 'next'

async function sendMail(
  name: string,
  email: string,
  phone: string,
  message: string,
) {
  // send mail logic here
  await new Promise((resolve) => setTimeout(resolve, 2000))
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body
    const response = await sendMail(name, email, phone, message)
    res.status(200).json({ message: 'Mail sent successfully', response })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
