import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { DialogRemoveCommentViewProps } from "./dialog-remove-comment.types";

export const DialogRemoveCommentView = (
  props: DialogRemoveCommentViewProps
) => {
  const { children, isPending, onToggle, open, handleRemove } = props;

  return (
    <DialogRoot placement="center" open={open} onOpenChange={onToggle}>
      <DialogBackdrop />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent position="fixed" inset="0" h="min-content">
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Remover Comentário</DialogTitle>
        </DialogHeader>
        <DialogBody display="grid" gap={4}>
          Tem certeza disso ?
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogActionTrigger>
          <Button
            variant="solid"
            isLoading={isPending}
            transition="all"
            bg="red.500"
            _hover={{ bg: "red.600" }}
            onClick={handleRemove}
          >
            Remover
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
