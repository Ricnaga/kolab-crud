import {
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
  CardTitle,
  Skeleton,
} from "@chakra-ui/react";

export function CardSkeleton() {
  return (
    <CardRoot variant="subtle">
      <CardHeader mb={2}>
        <CardTitle>
          <Skeleton h={6} />
        </CardTitle>
      </CardHeader>

      <CardBody>
        <CardDescription>
          <Skeleton h={3} mb={2} />
          <Skeleton h={3} mb={7} />
          <Skeleton h={9} mb={5} />
        </CardDescription>
      </CardBody>
    </CardRoot>
  );
}
