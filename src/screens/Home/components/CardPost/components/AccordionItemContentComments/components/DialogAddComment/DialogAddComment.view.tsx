import {
  Box,
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
  Field,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Button } from "@components/Button";
import { DialogAddCommentViewProps } from "./dialog-add-comment.types";

export const DialogAddCommentView = (props: DialogAddCommentViewProps) => {
  const {
    children,
    isDisabled,
    isPending,
    onSubmit,
    register,
    onToggle,
    open,
    handleClose,
  } = props;

  return (
    <DialogRoot placement="center" open={open} onOpenChange={onToggle}>
      <DialogBackdrop />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent position="fixed" inset="0" h="min-content">
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Criar Comentário</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <DialogBody display="grid" gap={4}>
            <Field.Root>
              <Box pos="relative" w="full">
                <Field.Label>Título</Field.Label>
                <Input
                  bg="yellow.50"
                  px={2}
                  className="peer"
                  placeholder=""
                  {...register("name")}
                />
              </Box>
            </Field.Root>
            <Field.Root>
              <Field.Label>Descrição</Field.Label>
              <Textarea height={"28"} {...register("body")} />
            </Field.Root>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
            </DialogActionTrigger>
            <Button type="submit" disabled={isDisabled} isLoading={isPending}>
              Criar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};
