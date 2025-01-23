import {
  Button,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardRoot,
  Input,
} from "@chakra-ui/react";
import { CardTitleAuthor } from "@components/CardTitleAuthor";
import { FormCommentViewProps } from "./form-comment.types";
import { DialogRemoveComment } from "./components/DialogRemoveComment";

export const FormCommentView = (props: FormCommentViewProps) => {
  const {
    comment,
    isPostCreator,
    post,
    buttonProps,
    open,
    fields,
    handleChange,
    user
  } = props;

  return (
    <CardRoot variant="subtle" bg="gray.200">
      <CardHeader>
        <CardTitleAuthor userId={user.id.toString()} />
      </CardHeader>
      <CardBody>
        <CardDescription>
          {open ? (
            <Input
              bg="yellow.50"
              px={2}
              h="8"
              mb="2"
              value={fields.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          ) : (
            fields.name
          )}
        </CardDescription>
        <CardDescription>
          {open ? (
            <Input
              bg="yellow.50"
              px={2}
              h="8"
              mb="2"
              value={fields.body}
              onChange={(e) => handleChange("body", e.target.value)}
            />
          ) : (
            fields.body
          )}
        </CardDescription>
      </CardBody>

      {isPostCreator && (
        <CardFooter ml="auto">
          <DialogRemoveComment post={post} comment={comment}>
            <Button
              size="sm"
              variant="outline"
              borderColor="red.400"
              color="red.500"
            >
              Remover
            </Button>
          </DialogRemoveComment>
          <Button {...buttonProps}>Editar</Button>
        </CardFooter>
      )}
    </CardRoot>
  );
};
