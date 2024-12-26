import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, Navigate, Outlet, useLocation } from "react-router";
import { HOME, MAIN, PROFILE } from "./paths";

export function MainRouter() {
  const { pathname } = useLocation();
  if (pathname === MAIN) return <Navigate to={HOME} replace />;

  return (
    <main>
      <Flex gap={2}>
        <Link to={PROFILE}>
          <Text _hover={{ color: "yellow.500" }} textStyle={"xl"}>
            Perfil
          </Text>
        </Link>
        <Link to={HOME}>
          <Text _hover={{ color: "yellow.500" }} textStyle={"xl"}>
            Feed de posts
          </Text>
        </Link>
      </Flex>
      <Box p={2}>
        <Outlet />
      </Box>
    </main>
  );
}
