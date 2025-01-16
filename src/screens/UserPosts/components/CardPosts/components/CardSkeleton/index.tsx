import {
  CardBody,
  CardHeader,
  CardRoot,
  CardTitle,
  Skeleton,
} from "@chakra-ui/react";

export function CardSkeleton() {
  return (
    <CardRoot variant="subtle">
      <CardHeader>
        <CardTitle>
          <Skeleton h={6} />
        </CardTitle>
      </CardHeader>

      <CardBody gap={4} mb={5}>
        <Skeleton h={4} />
        <Skeleton h={4} />
      </CardBody>
    </CardRoot>
  );
}
