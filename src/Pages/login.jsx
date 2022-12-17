import { Box, Flex } from "@chakra-ui/react";

import ServiceCarousel from "../Components/Utils/ServiceCarousel";
import LoginForm from "../Components/Auth/LoginForm";

function Login() {
  return (
    <Box>
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        maxW={{ base: "99%", md: "80%" }}
        m={{ base: "20px auto", md: "40px auto" }}
        justifyContent="space-between"
        alignItems="center"
        gap={{ base: "20px", md: "auto" }}
      >
        <ServiceCarousel />
        <LoginForm />
      </Flex>
    </Box>
  );
}

export default Login;
