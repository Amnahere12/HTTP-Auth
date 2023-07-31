'use client'
import Layout from "./layout";
import dynamic from "next/dynamic";
import Signup from "@/components/Signup";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const LoginPage = dynamic(() => import("@/components/Login")); // Use dynamic import for LoginPage

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Welcome!
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <LoginPage />
        <Signup/>
      </SimpleGrid>
    </Layout>
  );
};

export default HomePage;
