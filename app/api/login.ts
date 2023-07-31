// app/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import db from '@/JSON/db.json'

interface LoginRequestData {
  email: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginRequestData;

    const user = db.users.find(
      (user:any) => user.email === email && user.password === password
    );

    if (user) {
      // Successful login
      return res.status(200).json({ message: "Login successful!" });
    } else {
      // Failed login
      return res.status(401).json({ error: "Invalid credentials." });
    }
  }

  return res.status(405).end(); // Method Not Allowed
};

export default handler;
