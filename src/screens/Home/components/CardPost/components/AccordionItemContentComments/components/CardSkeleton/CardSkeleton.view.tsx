import {
  CardBody,
  CardHeader,
  CardRoot,
  CardTitle,
  Skeleton,
} from "@chakra-ui/react";

export const CardSkeletonView = () => (
  <CardRoot variant="subtle">
    <CardHeader mb={2}>
      <CardTitle>
        <Skeleton h={6} />
      </CardTitle>
    </CardHeader>

    <CardBody gap={2}>
      <Skeleton h={4} />
      <Skeleton h={4} />
    </CardBody>
  </CardRoot>
);
