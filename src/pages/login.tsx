import { Box, Flex, VStack, useBreakpointValue } from "@chakra-ui/react";
import LoginForm from "../components/loginForm";
import { AuthProvider } from "../context/authContext";

export const Login: React.FC = () => {
  const boxWidth = useBreakpointValue({ base: "90%", md: "70vw", lg: "30vw" });

  return (
    <Box backgroundColor="black" height="100vh">
      <Flex
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <VStack spacing={12}>
          <Box boxShadow="dark-lg"  width={boxWidth} p={15}>
            <AuthProvider>
              <LoginForm />
            </AuthProvider>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Login;
