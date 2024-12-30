import { usePostsQuery } from "@/infra/posts";
import { useUserQuery } from "@/infra/users";
import { Button, Card, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { CardSkeleton } from "@components/CardSkeleton";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router";

export default function UserPosts() {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  const { isLoading, data } = usePostsQuery({ userId });
  const { data: userData } = useUserQuery({
    id: userId || "",
  });

  if (isLoading)
    return (
      <SimpleGrid gap={2} mt={2}>
        {Array.from({ length: 3 }).map(() => (
          <CardSkeleton key={Math.random().toString()} />
        ))}
      </SimpleGrid>
    );

  return (
    <SimpleGrid gap={2}>
      <Heading>
        <Button
          variant={"outline"}
          borderRadius={"full"}
          onClick={() => navigate(-1)}
        >
          <MdOutlineArrowBack />
        </Button>{" "}
        Postagens do usuário: {userData?.name}
      </Heading>
      {data.map((post) => (
        <Card.Root
          key={post.id.toString()}
          p={4}
          display={"grid"}
          gap={2}
          shadow={"0px 10px 12px -12px rgba(0,0,0,0.1)"}
        >
          <Card.Header>
            <Text fontWeight={"bold"} textStyle={"xl"}>
              Título:
            </Text>{" "}
            {post.title}
          </Card.Header>
          <Card.Body>
            <Text fontWeight={"bold"} textStyle={"xl"}>
              Descrição:
            </Text>{" "}
            {post.body}
          </Card.Body>
        </Card.Root>
      ))}
    </SimpleGrid>
  );
}
