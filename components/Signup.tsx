'use client'
import { useState } from "react";
import axios from "axios";
import { Container, Heading, Input, Button } from "@chakra-ui/react";

interface SignupResponse {
  message: string;
}

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    try {
      // API call with dummy data
      const response = await axios.post<SignupResponse>("/api/signup", {
        email,
        password,
      });

      console.log(response.data.message);
    } catch (err) {
      setError("Failed to create an account. Please try again.");
    }
  };

  return (
    <Container maxW="md" py={10}>
      <Heading as="h1" mb={6}>
        Sign Up
      </Heading>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb={4}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        mb={4}
      />
      <Button colorScheme="green" onClick={handleSignup}>
        Sign Up
      </Button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </Container>
  );
};

export default Signup;