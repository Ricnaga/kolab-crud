import queryClient from "@/infra/@adapters/react-query";
import { useRemovePostsMutation } from "@/infra/posts";
import { PostsKey } from "@/infra/posts/posts.queries";
import { PostType } from "@/shared/types/global.types";
import {
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
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";

type PostDeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
};

export function PostDeleteModal(props: PostDeleteModalProps) {
  const { isOpen, onClose, id } = props;

  const { mutate, isPending } = useRemovePostsMutation();

  function handleDeletePost() {
    mutate(id, {
      onSuccess: () => {
        onClose();
        queryClient.setQueryData(
          [PostsKey.POSTS, null],
          (queryData: { data: Array<PostType> }) => ({
            ...queryData,
            data: queryData.data.filter((data) => data.id.toString() !== id),
          })
        );
      },
      onError: () => {
        onClose();

        console.error("ERRO AO REMOVER POST");
      },
    });
  }

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
          <DialogTitle>
            <Heading>Remover Post</Heading>
          </DialogTitle>
        </DialogHeader>
        <DialogBody my={4}>
          <Text textStyle={"md"}>Deseja Remover esse Post ?</Text>
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
            onClick={handleDeletePost}
            disabled={isPending}
          >
            {isPending ? <Spinner size="sm" /> : "Remover"}
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
