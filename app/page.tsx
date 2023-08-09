//app/page.tsx
'use client'
import Layout from "./layout";
import dynamic from "next/dynamic";
import { Heading, SimpleGrid } from "@chakra-ui/react";

const LoginPage = dynamic(() => import("@/components/Login"));

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Heading as="h1" size="xl" textAlign="center" my={10}>
        Welcome!
      </Heading>
      <SimpleGrid columns={1} gap={5} justifyContent="center" alignItems="center">
        <LoginPage />
      </SimpleGrid>
    </Layout>
  );
};

export default HomePage;
