import {
  Button,
  Flex,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router";
import { CardPosts } from "./components/CardPosts";
import { HeadingAuthor } from "./components/HeadingAuthor";

export default function UserPosts() {
  const navigate = useNavigate();

  return (
    <Grid gap={4}>
      <GridItem mt={4}>
        <Flex alignItems="center" gap={2}>
          <Button
            transition="all"
            _hover={{
              filter: "brightness(105%)",
              _active: { filter: "brightness(110%)" },
            }}
            backgroundGradient="to-br"
            gradientFrom="cyan.600"
            gradientVia="cyan.500"
            gradientTo="cyan.400"
            borderRadius={"full"}
            onClick={() => navigate(-1)}
          >
            <MdOutlineArrowBack />
          </Button>
          <HeadingAuthor />
        </Flex>
      </GridItem>
      <GridItem display="grid" gap={2} h="80vh" overflowY="auto" p={1}>
        <CardPosts />
      </GridItem>
    </Grid>
  );
}
