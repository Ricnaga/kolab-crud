import { useCommentsQuery } from "@/infra/comments";
import { useUserQuery } from "@/infra/users";
import { PostType } from "@/shared/types/global.types";
import { USER_BYUSER_ID_POSTS } from "@application/router/paths";
import {
  AccordionItemContent,
  Button,
  CardBody,
  Em,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CardSkeleton } from "@components/CardSkeleton";
import { MdArrowForward, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import { CommentModal } from "./components/CommentModal";
import { FormComments } from "./components/FormComments";
import { USER_ID } from "@application/data/environment";
import { PostEditModal } from "./components/PostEditModal";
import { PostDeleteModal } from "./components/PostDeleteModal";

type AccordionItemContentCommentsProps = {
  post: PostType;
  isEnabled?: boolean;
};

export function AccordionItemContentComments(
  props: AccordionItemContentCommentsProps
) {
  const { post, isEnabled = false } = props;

  const navigate = useNavigate();

  const { open, onClose, onOpen } = useDisclosure();

  const {
    onClose: onCloseEdit,
    open: openEdit,
    onOpen: onOpenEdit,
  } = useDisclosure();

  const {
    onClose: onCloseDelete,
    open: openDelete,
    onOpen: onOpenDelete,
  } = useDisclosure();

  const { data, isLoading } = useCommentsQuery({
    postId: post.id.toString(),
    isEnabled,
  });

  const { data: userData, isLoading: isLoadingUser } = useUserQuery({
    id: post.userId.toString(),
  });

  if (isLoading)
    return (
      <SimpleGrid p={4} gap={2}>
        {Array.from({ length: 3 }).map(() => (
          <CardSkeleton key={Math.random().toString()} />
        ))}
      </SimpleGrid>
    );

  return (
    <AccordionItemContent paddingX={"2rem"} paddingY={"1rem"}>
      {post.userId.toString() === USER_ID && (
        <GridItem justifyItems={"self-start"} display={"flex"} gap={2} mb={2}>
          <Button
            colorPalette={"cyan"}
            borderRadius={"full"}
            onClick={onOpenEdit}
          >
            <MdEdit />
          </Button>
          <Button
            colorPalette={"red"}
            borderRadius={"full"}
            onClick={onOpenDelete}
          >
            <MdDelete />
          </Button>
          <PostEditModal post={post} isOpen={openEdit} onClose={onCloseEdit} />
          <PostDeleteModal
            isOpen={openDelete}
            onClose={onCloseDelete}
            id={post.id.toString()}
          />
        </GridItem>
      )}
      <SimpleGrid gap={4}>
        <GridItem textAlign="left">
          <Heading size={"lg"}>Descrição:</Heading>
          <Text fontWeight="normal" fontSize={"large"}>
            {post.body}
          </Text>
        </GridItem>
        <GridItem>
          <Text textStyle={"md"}>Autor:</Text>
          <Em
            fontWeight={"medium"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
          >
            {isLoadingUser ? (
              <Skeleton h={2} marginTop={2} maxW={"1/6"} />
            ) : (
              <>
                {userData?.name || "Desconhecido"}
                <Button
                  borderRadius={"full"}
                  size={"xs"}
                  colorPalette={"cyan"}
                  onClick={() =>
                    navigate(
                      USER_BYUSER_ID_POSTS.replace(
                        ":userId",
                        post.userId.toString()
                      )
                    )
                  }
                >
                  <MdArrowForward />
                </Button>
              </>
            )}
          </Em>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid alignItems={"center"}>
        <Text textStyle={"lg"} textAlign={"center"} fontWeight={"bold"}>
          Comentários:
        </Text>
        {data.map((comment) => (
          <FormComments
            key={comment.id.toString()}
            comment={comment}
            postId={post.id.toString()}
          />
        ))}
      </SimpleGrid>
      <CardBody marginTop={4}>
        <Button onClick={onOpen} colorPalette={"blue"}>
          Comentar
        </Button>
        <CommentModal
          isOpen={open}
          onClose={onClose}
          postId={post.id.toString()}
        />
      </CardBody>
    </AccordionItemContent>
  );
}
