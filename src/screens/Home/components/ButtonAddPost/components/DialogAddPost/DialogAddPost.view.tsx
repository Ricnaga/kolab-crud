import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogActionTrigger,
  DialogCloseTrigger,
  DialogBackdrop,
  Field,
  Box,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { DialogAddPostViewProps } from "./dialog-add-post.types";
import { Button } from "@components/Button";

export const DialogAddPostView = (props: DialogAddPostViewProps) => {
  const {
    children,
    isDisabled,
    isPending,
    onSubmit,
    register,
    onToggle,
    open,
  } = props;

  return (
    <DialogRoot placement="center" open={open} onOpenChange={onToggle}>
      <DialogBackdrop />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent position="absolute" inset="0" h="min-content">
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Criar Postagem</DialogTitle>
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
                  {...register("title")}
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
              <Button variant="outline">Cancelar</Button>
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
