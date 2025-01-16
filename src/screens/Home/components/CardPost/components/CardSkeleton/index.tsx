import {
  CardBody,
  CardHeader,
  CardRoot,
  Skeleton
} from "@chakra-ui/react";

export function CardSkeleton() {
  return (
    <CardRoot variant="subtle">
      <CardHeader mb={2}>
        <Skeleton h={6} />
      </CardHeader>

      <CardBody>
        <Skeleton h={3} mb={2} />
        <Skeleton h={3} mb={7} />
        <Skeleton h={9} mb={5} />
      </CardBody>
    </CardRoot>
  );
}
