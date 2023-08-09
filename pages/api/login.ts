// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { findUserByEmail } from "./users";

interface LoginRequestData {
  email: string;
  password: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body as LoginRequestData;

    // Check if the user exists in the users list
    const user = findUserByEmail(email);

    if (user && user.password === password) {
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
