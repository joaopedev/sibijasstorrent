import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Heading,
  Box,
  Button,
  Input,
  VStack,
} from "@chakra-ui/react";
import TopButtonsTorrent from "../components/topButtonsTorrent";

export const Home: React.FC = () => {
  return (
    <Box>
      <Grid
        mt={3}
        h="100vh"
        templateRows="repeat(1  , 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Flex>
            <Flex
              ml={3}
              mt={3}
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              mb={10}
            >
              <Avatar
                name="Segun Adebayo"
                src="https://criticalhits.com.br/wp-content/uploads/2022/06/naruto-uzumaki_qabz-scaled.jpg"
              />
              <Box>
                <Heading size="sm">Narutim</Heading>
              </Box>
            </Flex>
          </Flex>
          <Box ml={4}>
            <Box mb={5}>
              <Button>
                <Heading size="sm">Dashboard</Heading>
              </Button>
            </Box>
            <Box mb={5}>
              <Button>
                <Heading size="sm">Watch</Heading>
              </Button>
            </Box>
            <Box mb={5}>
              <Button>
                <Heading size="sm">Search Videos</Heading>
              </Button>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={4} bg="#c9c9c9">
          <Box mt={8} ml="30%" w="40%">
            <Input />
          </Box>
          <VStack mt={6} spacing={4} align="stretch">
            <Box
              borderWidth="1px"
              borderRadius="10px"
              borderColor="gray.300"
              p={4}
              m={3}
              bg="white"
              boxShadow="md"
            >
              <VStack mt={6} spacing={4} align="stretch">
                <Box
                  borderWidth="1px"
                  borderRadius="10px"
                  borderColor="gray.300"
                  p={4}
                  m={3}
                  bg="white"
                  boxShadow="md"
                >
                  <TopButtonsTorrent />
                </Box>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;
