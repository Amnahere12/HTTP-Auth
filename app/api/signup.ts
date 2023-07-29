import { NextApiRequest, NextApiResponse } from "next";

interface SignupRequestData {
  email: string;
  password: string;
}

interface SignupResponseData {
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body as SignupRequestData;

    
    const response: SignupResponseData = { message: "Signup successful!" };
    return res.status(200).json(response);
  }

  return res.status(405).end(); // Method Not Allowed
};

export default handler;
