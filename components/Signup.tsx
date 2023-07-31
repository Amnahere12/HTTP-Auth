'use client'
import React, { useState } from "react";
import { Container, Heading, Input, Button, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link"; // Import NextLink

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track signup success

  const handleSignup = () => {
    setError("");
    // Simulate backend signup logic using local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const existingUser = users.find((user: any) => user.email === email);
    if (existingUser) {
      setError("Email already exists.");
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setSignupSuccess(true); // Set signup success state to true
      setEmail(""); // Reset email field
      setPassword(""); // Reset password field
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
          <Text color="green.500" mt={4}>
            Signup successful!
          </Text>
        )}
        
      </Box>
    </Container>
  );
};

export default Signup;
