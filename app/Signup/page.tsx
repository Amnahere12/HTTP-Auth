//app/Signup/page.tsx
'use client'

import React, { useState } from "react";
import { Container, Heading, Input, Button, Text, Box } from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link"; // Import the NextLink component

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [submittedEmails, setSubmittedEmails] = useState<string[]>([]);

  const handleSignup = async () => {
    setError("");
    setSignupSuccess(false);

    if (submittedEmails.includes(email)) {
      setError("Email already exists.");
      return;
    }

    try {
      if (!email.includes("@")) {
        setError("Invalid email format. Please use a valid email address.");
        return;
      }

      const response = await axios.post("/api/signup", {
        email,
        password,
      });

      if (response.status === 200) {
        setSignupSuccess(true);
        setSubmittedEmails([...submittedEmails, email]);
        setEmail("");
        setPassword("");
        console.log("Signup successful!");
      } else if (response.status === 409) {
        setError("Email already exists.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("An error occurred:", error);
    }
  };

  return (
    <Container maxW="md" py={10}>
      <Box bg="gray.50" p={8} borderRadius="md" boxShadow="md">
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
        {error && <Text color="red.500">{error}</Text>}
        {signupSuccess && (
          <>
            <Text color="green.500" mt={4}>
              Signup successful!
            </Text>
            <NextLink href="/Login">
              <Button mt={4} colorScheme="blue">
                Back to Login
              </Button>
            </NextLink>

          </>
        )}
      </Box>
    </Container>
  );
};

export default Signup;