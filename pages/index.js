import styled from "styled-components";
import Head from "next/head";
import { Text, Code, Heading, Button, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { LogoIcon } from "@/lib/Logo";
import { useAuth } from "@/lib/auth";
import EmptyState from "../components/EmptyState";
export default function Index() {
  const auth = useAuth();

  return (
    <div className="container">
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Head>
          <title>FastFeedback </title>
        </Head>
        <LogoIcon boxSize={20} color="black" />

        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm" onClick={(e) => auth.signinWithGitHub()}>
            Sign In
          </Button>
        )}
      </Flex>
    </div>
  );
}
