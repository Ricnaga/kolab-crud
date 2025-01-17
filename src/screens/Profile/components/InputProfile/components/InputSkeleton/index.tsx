import { Grid, GridItem, Skeleton } from "@chakra-ui/react";

export function InputSkeleton() {
  return (
    <Grid gap={2} mb={2}>
      <GridItem>
        <Skeleton h={4} bg="gray.500" />
      </GridItem>
      <GridItem>
        <Skeleton h={8} bg="gray.500" />
      </GridItem>
    </Grid>
  );
}
