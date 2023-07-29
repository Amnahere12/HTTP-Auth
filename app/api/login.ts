
import { NextApiRequest, NextApiResponse } from "next";

interface LoginRequestData {
  email: string;
  password: string;
}

interface LoginResponseData {
  message: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginRequestData;

    
    if (email === "test@example.com" && password === "password") {
      // Successful login
      const response: LoginResponseData = { message: "Login successful!" };
      return res.status(200).json(response);
    } else {
      // Failed login
      return res.status(401).json({ error: "Invalid credentials." });
    }
  }

  return res.status(405).end(); // Method Not Allowed
};

export default handler;
