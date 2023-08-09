//pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import { User, addUser, findUserByEmail } from "./users";

// Simple counter to generate unique IDs
let counter = 1;
const generateUniqueId = () => counter++;

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

    // Check if the user with the provided email already exists
    const existingUser = findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: "Email already exists." });
    } else {
      // Generate a unique id for the new user
      const id = generateUniqueId();

      // Create a complete User object with id, email, and password
      const newUser: User = { id, email, password };

      // Add the new user to the users array
      addUser(newUser);

      const response: SignupResponseData = { message: "Signup successful!" };
      return res.status(200).json(response);
    }
  }

  return res.status(405).end(); // Method Not Allowed
};

export default handler;
