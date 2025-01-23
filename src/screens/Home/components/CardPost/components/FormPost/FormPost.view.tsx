import {
  Button,
  CardBody,
  CardDescription,
  CardHeader,
  CardRoot,
  Grid,
  Input,
} from "@chakra-ui/react";
import { CardTitleAuthor } from "@components/CardTitleAuthor";
import { FormPostViewProps } from "./form-post.types";
import { AccordionRootComments } from "./components/AccordionRootComments";
import { AccordionItemContentComments } from "./components/AccordionItemContentComments";
import { DialogRemovePost } from "./components/DialogRemovePost";

export const FormPostView = (props: FormPostViewProps) => {
  const {
    post,
    buttonProps,
    handleNextPage,
    isPostCreator,
    fields,
    handleChange,
    open,
  } = props;

  return (
    <CardRoot variant="elevated">
      <CardHeader>
        <CardTitleAuthor
          userId={post.userId.toString()}
          handleNavigate={() => handleNextPage(post.userId.toString())}
        />
      </CardHeader>

      <CardBody>
        <CardDescription>
          {open ? (
            <Input
              bg="yellow.50"
              px={2}
              h="8"
              mb="2"
              value={fields.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          ) : (
            fields.title
          )}
        </CardDescription>
        <CardDescription mb={2}>
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
        {isPostCreator && (
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap={2} mb={4} ml="auto">
            <DialogRemovePost post={post}>
              <Button
                size="sm"
                variant="outline"
                borderColor="red.400"
                color="red.500"
              >
                Remover
              </Button>
            </DialogRemovePost>
            <Button {...buttonProps}>Editar</Button>
          </Grid>
        )}

        <AccordionRootComments post={post}>
          {(accordionItemContentCommentsProps) => (
            <AccordionItemContentComments
              {...accordionItemContentCommentsProps}
            />
          )}
        </AccordionRootComments>
      </CardBody>
    </CardRoot>
  );
};
