import React from "react";
import { Box, Flex, Select, Text } from "@chakra-ui/react";

export const Torrent: React.FC = () => {
  return (
    <Box backgroundColor="white" maxW="100%" p={6}>
      <Flex>
        <Select m={3} maxW="4%"></Select>
        <Text m={3}> Testando</Text>

      </Flex>
    </Box>
  );
};

export default Torrent;
