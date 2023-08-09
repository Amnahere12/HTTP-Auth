//app/forgot-password/page.tsx
'use client'
import { useState } from "react";
import { Container, Heading, Input, Button, Text, Box, Alert, AlertIcon } from "@chakra-ui/react";
import { NextPage } from "next";

const ForgotPassword: NextPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate sending an email for password reset
    try {
      // You can implement actual email sending logic here
      // For the purpose of this example, we're just displaying a success message
      setMessage(`An email has been sent to ${email} with instructions to reset your password.`);
      setEmail(""); // Clear the email field after sending
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Container maxW="md" py={10}>
      <Box bg="gray.50" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h1" mb={6}>
          Forgot Password
        </Heading>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={4}
        />
        <Button colorScheme="blue" onClick={handleForgotPassword}>
          Send Reset Email
        </Button>
        {error && <Alert status="error" mt={4}><AlertIcon />{error}</Alert>}
        {message && (
          <Alert status="success" mt={4}>
            <AlertIcon />
            {message}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default ForgotPassword;
