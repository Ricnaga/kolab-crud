import queryClient from "@/infra/@adapters/react-query";
import {
  useUpdateCommentsMutation,
  useRemoveCommentsMutation,
} from "@/infra/comments";
import { CommentsKey } from "@/infra/comments/comments.queries";
import { CommentType } from "@/shared/types/global.types";
import {
  Button,
  Em,
  Input,
  SimpleGrid,
  Spinner,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

type FormCommentsProps = {
  comment: CommentType;
  postId: string;
};

export function FormComments(props: FormCommentsProps) {
  const { comment, postId } = props;

  const { mutate: updateComments } = useUpdateCommentsMutation();

  const { mutate: removeComments, isPending: isRemoving } =
    useRemoveCommentsMutation();

  const [isEditting, setAsEditting] = useState<boolean>(false);
  const [fields, setFields] = useState<CommentType>(comment);

  function handleUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    updateComments(
      { commentId: fields.id.toString(), data: fields },
      {
        onSuccess: () => console.log("ATUALIZADO COM SUCESSO"),
        onError: () => console.error("ERRO AO ATUALIZAR COMENTÁRIO"),
      }
    );
  }

  function handleRemove() {
    removeComments(fields.id.toString(), {
      onSuccess: () => {
        queryClient.setQueryData(
          [CommentsKey.Comments, postId],
          (queryData: { data: Array<CommentType> }) => ({
            ...queryData,
            data: queryData.data.filter(
              (data) => data.id.toString() !== fields.id.toString()
            ),
          })
        );
      },
      onError: () => console.error("ERRO AO REMOVER COMENTÁRIO"),
    });
  }

  return (
    <form onSubmit={handleUpdate}>
      <SimpleGrid marginY={"2"}>
        <Stack direction={"column"}>
          Usuário:{" "}
          {isEditting ? (
            <Input
              onChange={(e) => setFields({ ...fields, name: e.target.value })}
              value={fields.name}
            />
          ) : (
            <Em>{fields.name}</Em>
          )}
          Email:{" "}
          {isEditting ? (
            <Input
              onChange={(e) => setFields({ ...fields, email: e.target.value })}
              value={fields.email}
            />
          ) : (
            <Em>{fields.email}</Em>
          )}
          Descrição:{" "}
          {isEditting ? (
            <Textarea
              height={"28"}
              value={fields.body}
              onChange={(e) => setFields({ ...fields, body: e.target.value })}
            />
          ) : (
            <Em>{fields.body}</Em>
          )}
        </Stack>

        <SimpleGrid
          marginTop={4}
          columns={2}
          justifySelf={"self-start"}
          gap={"1"}
        >
          <Button
            colorPalette={isEditting ? "blue" : "yellow"}
            onClick={() => setAsEditting(!isEditting)}
            type={isEditting ? "button" : "submit"}
            px={2}
          >
            <MdEdit /> {isEditting ? "Alterar" : "Editar"}
          </Button>
          <Button
            disabled={isRemoving}
            colorPalette={"red"}
            onClick={handleRemove}
            px={2}
          >
            {isRemoving ? (
              <Spinner size="sm" />
            ) : (
              <>
                <MdDelete /> Remover
              </>
            )}
          </Button>
        </SimpleGrid>
      </SimpleGrid>
    </form>
  );
}
