import { SimpleGrid } from "@chakra-ui/react";
import { FormUser } from "./components/FormUser";
import ProfileProvider from "./context/ProfileProvider";

export const ProfileView = () => {
  return (
    <ProfileProvider>
      <SimpleGrid
        gap={2}
        w="full"
        h="full"
        maxW="32rem"
        justifySelf="center"
        marginTop="1rem"
      >
        <FormUser />
      </SimpleGrid>
    </ProfileProvider>
  );
};
