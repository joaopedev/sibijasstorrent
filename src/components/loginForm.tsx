import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  console.log(emailError);

  const handleLogin = () => {
    if (isAuthenticated) {
      navigate("/home", { state: { email } });
    } else {
      if (email) {
        login(email);
        setEmailError(false);
      } else {
        setEmailError(true);
        setLoginError(true);
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home", { state: { email } });
    }
  }, [isAuthenticated, navigate, email]);

  return (
    <Box backgroundColor="white" maxW="100%" p={6} rounded="md">
      <VStack spacing={3}>
        <FormControl>
          <FormLabel mb={5}>Email</FormLabel>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        {loginError && <Text color="red">Senha inválida</Text>}
        <Button mb={5} colorScheme="green" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
