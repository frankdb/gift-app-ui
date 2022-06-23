import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import LoginForm from "../components/LoginForm";

const Login = () => (
  <Box bg="purple.100" h="100vh">
    <LoginForm />
  </Box>
);

export default Login;
