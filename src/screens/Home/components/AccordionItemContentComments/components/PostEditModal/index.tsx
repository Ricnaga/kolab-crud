import queryClient from "@/infra/@adapters/react-query";
import { useUpdatePostsMutation } from "@/infra/posts";
import { PostsKey } from "@/infra/posts/posts.queries";
import { PostType } from "@/shared/types/global.types";
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
import { useState } from "react";

type PostEditModalProps = {
  isOpen: boolean;
  onClose: () => void;
  post: PostType;
};

export function PostEditModal(props: PostEditModalProps) {
  const { isOpen, onClose, post } = props;

  const { mutate, isPending } = useUpdatePostsMutation();

  const [postValue, setPostValue] = useState<PostType>(post);

  function handleUpdatePost() {
    mutate(postValue, {
      onSuccess: () => {
        onClose();
      },
      onError: () => {
        onClose();

        console.error("ERRO AO EDITAR POST");
      },
    });
    queryClient.setQueryData(
      [PostsKey.POSTS, null],
      (queryData: { data: Array<PostType> }) => ({
        ...queryData,
        data: queryData.data.map((data) =>
          data.id.toString() === postValue.id.toString() ? postValue : data
        ),
      })
    );
  }

  const isDisabled = [!post.title.length, isPending].includes(true);

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
          <DialogTitle>Editar Post</DialogTitle>
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
                value={postValue.title}
                onChange={(e) =>
                  setPostValue({ ...postValue, title: e.target.value })
                }
              />
            </Box>
          </Field.Root>

          <Field.Root>
            <Field.Label>Descrição</Field.Label>
            <Textarea
              height={"28"}
              value={postValue.body}
              onChange={(e) =>
                setPostValue({ ...postValue, body: e.target.value })
              }
            />
          </Field.Root>
        </DialogBody>
        <DialogFooter mt={2}>
          <DialogActionTrigger asChild>
            <Button variant="outline" paddingX={1} colorPalette={"red"}>
              Cancelar
            </Button>
          </DialogActionTrigger>
          <Button
            paddingX={1}
            colorPalette={"blue"}
            onClick={handleUpdatePost}
            disabled={isDisabled}
          >
            {isPending ? <Spinner size="sm" /> : "Atualizar"}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
