import React from "react";

import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

export default function EmptyState() {
  return (
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2}>
        You haven’t added any sites.
      </Heading>
      <Text mb={4}>Let’s get started.</Text>
      <AddSiteModal>Add your first site</AddSiteModal>
    </Flex>
  );
}
