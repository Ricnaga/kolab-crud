import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { MdOutlineArrowBack } from "react-icons/md";
import { CardPosts } from "./components/CardPosts";
import { HeadingAuthor } from "./components/HeadingAuthor";
import { UserPostsViewProps } from "./user-posts.types";
import { Button } from "@components/Button";

export const UserPostsView = (props: UserPostsViewProps) => {
  const { handleBack } = props;
  return (
    <Grid gap={4}>
      <GridItem mt={4}>
        <Flex alignItems="center" gap={2}>
          <Button borderRadius="full" onClick={() => handleBack()}>
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
};
