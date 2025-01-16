import { Box, Flex, Text } from "@chakra-ui/react";
import { Link, Navigate, Outlet, useLocation } from "react-router";
import { HOME, MAIN, PROFILE } from "./paths";

const links = {
  [PROFILE]: "Perfil",
  [HOME]: "Home",
};

export function MainRouter() {
  const { pathname } = useLocation();
  if (pathname === MAIN) return <Navigate to={HOME} replace />;

  return (
    <main>
      <Flex gap={2} shadow="md" bg="gray.800" color="white" p={2}>
        {Object.entries(links).map(([key, value]) => (
          <Link to={key} key={key}>
            <Text
              _hover={{ color: "yellow.200" }}
              transition="all"
              textStyle={"xl"}
            >
              {value}
            </Text>
          </Link>
        ))}
      </Flex>
      <Box p={2}>
        <Outlet />
      </Box>
    </main>
  );
}
