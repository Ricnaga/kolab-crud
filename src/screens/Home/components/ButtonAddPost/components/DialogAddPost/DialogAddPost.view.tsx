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
  const { children } = props;
  
  return (
    <DialogRoot placement="center">
      <DialogBackdrop />
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent position="absolute" inset="0" h="min-content">
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>Criar Postagem</DialogTitle>
        </DialogHeader>
        <DialogBody display="grid" gap={4}>
          <Field.Root>
            <Box pos="relative" w="full">
              <Field.Label>Título</Field.Label>
              <Input bg={"yellow.50"} px={2} className="peer" placeholder="" />
            </Box>
          </Field.Root>
          <Field.Root>
            <Field.Label>Descrição</Field.Label>
            <Textarea height={"28"} />
          </Field.Root>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogActionTrigger>
          <Button>Criar</Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
