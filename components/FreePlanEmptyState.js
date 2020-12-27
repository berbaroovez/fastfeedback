import React from "react";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";

export default function FreePlanEmptyState() {
  return (
    <DashboardShell>
      <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
        <Heading sie="md">Get Feedback on your site instantly</Heading>
        <Text>Start Today, then grow with us</Text>
        <Button>Upgrade to Starter</Button>
      </Box>
    </DashboardShell>
  );
}
