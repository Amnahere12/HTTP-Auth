//components/Login.tsx
'use client'
import React, { useState } from "react";
import { Container, Heading, Input, Button, Checkbox, Text, Box, Link } from "@chakra-ui/react";
import axios from "axios";
import NextLink from "next/link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    setError("");
    setLoginSuccess(false);

    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setLoginSuccess(true);
        setEmail("");
        setPassword("");
        console.log("Login successful!");

        if (rememberMe) {
          // Save the user's login session information here, e.g., using localStorage or others
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("An error occurred:", error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
      <Container maxW="sm">
        <Box bg="gray.50" p={8} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="lg" mb={6} textAlign="center">
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
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Checkbox
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember Me
            </Checkbox>
            <Link as={NextLink} href="/Forgot-Password" color="blue.400">
              Forgot Password?
            </Link>
          </Box>
          <Button colorScheme="blue" onClick={handleLogin} mt={4} w="full">
            Login
          </Button>
          <Text mt={2} textAlign="center">
            Don't have an account?{" "}
            <Link as={NextLink} href="/Signup" color="blue.400">
              Sign up
            </Link>
          </Text>
          {error && <Text color="red.500" mt={4}>{error}</Text>}
          {loginSuccess && (
            <Text color="green.500" mt={4} textAlign="center">
              <span aria-label="Success"></span> Login successful!
            </Text>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
