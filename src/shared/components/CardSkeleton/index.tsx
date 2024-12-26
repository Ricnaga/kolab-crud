import { Card, Skeleton } from "@chakra-ui/react";

export function CardSkeleton() {
  return (
    <Card.Root p={4} gap={4}>
      <Card.Header>
        <Skeleton h={5} />
      </Card.Header>
      <Card.Body>
        <Skeleton h={8} />
      </Card.Body>
    </Card.Root>
  );
}
