import queryClient from "@/infra/@adapters/react-query";
import { CommentsKey } from "@/infra/comments/comments.queries";
import { CommentType } from "@/shared/types/global.types";
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
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

type CommentModalProps = {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
};

export function CommentModal(props: CommentModalProps) {
  const { isOpen, onClose, postId } = props;

  const [comment, setComment] = useState<string>("");

  function handleAddComment() {
    queryClient.setQueryData(
      [CommentsKey.Comments, postId],
      (queryData: { data: Array<CommentType> }) => ({
        ...queryData,
        data: [
          ...queryData.data,
          {
            postId,
            id: Math.random().toString(),
            name: "Fulano de tal",
            email: "John.doe@contoso.com",
            body: comment,
          },
        ],
      })
    );

    setComment("");
    onClose();
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
          <DialogTitle>Adicionar comentário</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {" "}
          <Textarea
            height={"28"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              variant="outline"
              paddingX={1}
              colorPalette={"red"}
              onClick={() => setComment("")}
            >
              Cancelar
            </Button>
          </DialogActionTrigger>
          <Button
            paddingX={1}
            colorPalette={"blue"}
            onClick={handleAddComment}
            disabled={!comment.length}
          >
            Adicionar
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
}
