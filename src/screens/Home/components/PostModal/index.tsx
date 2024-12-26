import queryClient from "@/infra/@adapters/react-query";
import { useCreatePostsMutation } from "@/infra/posts";
import { PostsKey } from "@/infra/posts/posts.queries";
import { CreatePostsRequestPayload } from "@/infra/posts/posts.requests";
import { PostType } from "@/shared/types/global.types";
import { USER_ID } from "@application/data/environment";
import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  Field,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useId, useState } from "react";

type PostState = Record<"title" | "description", string>;

const INITIAL_STATE: PostState = {
  title: "",
  description: "",
};

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PostModal(props: PostModalProps) {
  const { isOpen, onClose } = props;
  const id = useId();

  const { mutate, isPending } = useCreatePostsMutation();

  const [post, setPost] = useState<PostState>(INITIAL_STATE);

  function handleAddPost() {
    const newPost: CreatePostsRequestPayload = {
      id,
      body: post.description,
      title: post.title,
      userId: USER_ID,
    };

    mutate(newPost, {
      onSuccess: () => {
        setPost(INITIAL_STATE);
        onClose();
      },
      onError: () => {
        setPost(INITIAL_STATE);
        onClose();

        console.error("ERRO AO CRIAR POST");
      },
    });
    queryClient.setQueryData(
      [PostsKey.POSTS, null],
      (queryData: { data: Array<PostType> }) => ({
        ...queryData,
        data: [newPost, ...queryData.data],
      })
    );
  }

  const isDisabled = [
    !post.title.length,
    !post.description.length,
    isPending,
  ].includes(true);

  return (
    <DialogRoot
      lazyMount
      open={isOpen}
      onOpenChange={onClose}
      placement="center"
    >
      <DialogBackdrop />

      <DialogContent
        position={"fixed"}
        inset={0}
        m={"auto"}
        maxHeight={"fit-content"}
        padding={"4"}
      >
        <DialogHeader>
          <DialogTitle>Adicionar Post</DialogTitle>
        </DialogHeader>
        <DialogBody display={"grid"} gap={4}>
          <Field.Root>
            <Box pos="relative" w="full">
              <Field.Label>Título</Field.Label>
              <Input
                bg={"yellow.50"}
                px={2}
                className="peer"
                placeholder=""
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
            </Box>
          </Field.Root>

          <Field.Root>
            <Field.Label>Descrição</Field.Label>
            <Textarea
              height={"28"}
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
            />
          </Field.Root>
        </DialogBody>
        <DialogFooter mt={2}>
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              paddingX={1}
              colorPalette={"red"}
              onClick={() => setPost(INITIAL_STATE)}
            >
              Cancelar
            </Button>
          </DialogActionTrigger>
          <Button
            paddingX={1}
            colorPalette={"blue"}
            onClick={handleAddPost}
            disabled={isDisabled}
          >
            {isPending ? <Spinner size="sm" /> : "Adicionar"}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
