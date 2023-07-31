'use client'
import React, { useState } from "react";
import { Container, Heading, Input, Button, Text, Box } from "@chakra-ui/react";
import NextLink from "next/link"; // Import NextLink

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // State to track login success

  const handleLogin = () => {
    setError("");
    // Simulate backend login logic using local storage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (user) {
      // Successful login
      setLoginSuccess(true); // Set login success state to true
      setEmail(""); // Reset email field
      setPassword(""); // Reset password field
    } else {
      // Failed login
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container maxW="md" py={10}>
      <Box bg="gray.50" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h1" mb={6}>
          Login
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
        <Button colorScheme="blue" onClick={handleLogin}>
          Login
        </Button>
        {error && <Text color="red.500">{error}</Text>}
        {loginSuccess && (
          <Text color="green.500" mt={4}>
            Login successful!
          </Text>
        )}
        
      </Box>
    </Container>
  );
};

export default Login;


