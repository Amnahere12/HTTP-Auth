'use client'
import Layout from "./layout";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Welcome to My Next.js App
      </Heading>
      <SimpleGrid columns={2} spacing={10}>
        <Login />
        <Signup />
      </SimpleGrid>
    </Layout>
  );
};

export default HomePage;
