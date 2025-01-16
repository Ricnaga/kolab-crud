import { Grid, GridItem } from "@chakra-ui/react";
import { ButtonAddPost } from "./components/ButtonAddPost";
import { CardPost } from "./components/CardPost";
import { HomeViewProps } from "./home.types";

export const HomeView = (props: HomeViewProps) => {
  const { data, isLoading } = props;

  return (
    <Grid gap={4}>
      <GridItem mt={4} justifySelf="end">
        <ButtonAddPost />
      </GridItem>
      <GridItem display="grid" gap={2} h="80vh" overflowY="auto" p={1}>
        <CardPost isLoading={isLoading} data={data} />
      </GridItem>
    </Grid>
  );
};
