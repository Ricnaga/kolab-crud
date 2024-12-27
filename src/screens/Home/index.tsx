import { usePostsQuery } from "@/infra/posts";
import {
  AccordionItem,
  AccordionItemTrigger,
  AccordionRoot,
  Button,
  CardHeader,
  CardRoot,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CardSkeleton } from "@components/CardSkeleton";
import { useState } from "react";
import { AccordionItemContentComments } from "./components/AccordionItemContentComments";
import { PostModal } from "./components/PostModal";

export default function Home() {
  const { data, isLoading } = usePostsQuery();

  const { onClose, open, onOpen } = useDisclosure();

  const [value, setValue] = useState<Array<string>>([]);

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
      <Flex justifyContent={"end"}>
        <Button px={2} colorPalette={"cyan"} onClick={onOpen}>
          Adicionar Post
        </Button>
        <PostModal isOpen={open} onClose={onClose} />
      </Flex>
      <AccordionRoot
        collapsible
        value={value}
        onValueChange={(e) => setValue(e.value)}
      >
        {data.map((post) => (
          <CardRoot
            key={post.id.toString()}
            my={2}
            shadow={"0px 10px 12px -12px rgba(0,0,0,0.1)"}
          >
            <CardHeader>
              <AccordionItem value={post.id.toString()}>
                <AccordionItemTrigger cursor={"pointer"}>
                  <SimpleGrid columns={2} padding="1rem" gap={4}>
                    <GridItem colSpan={2} textAlign="left" fontWeight="bold">
                      <Heading size={"2xl"}>
                        Título:{" "}
                        <Text
                          fontWeight={"medium"}
                          fontSize={{ base: "1rem", sm: "1.5rem" }}
                        >
                          {post.title}
                        </Text>
                      </Heading>
                    </GridItem>
                  </SimpleGrid>
                </AccordionItemTrigger>

                <AccordionItemContentComments
                  isEnabled={value.includes(post.id.toString())}
                  post={post}
                />
              </AccordionItem>
            </CardHeader>
          </CardRoot>
        ))}
      </AccordionRoot>
    </SimpleGrid>
  );
}
