import useHomeContext from "@/screens/Home/context";
import { ButtonProps, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FieldStateType, UseFormCommentProps } from "./form-comment.types";

export const useFormComment = (props: UseFormCommentProps) => {
  const { comment, post } = props;

  const { handlePostCreator, user } = useHomeContext();
  const isPostCreator = handlePostCreator(post.userId);

  const [fields, setFields] = useState<FieldStateType>({
    name: comment.name,
    body: comment.body,
  });

  const handleChange = (key: keyof FieldStateType, value: string) =>
    setFields({ ...fields, [key]: value });

  const { open, onToggle } = useDisclosure();

  const buttonProps: ButtonProps = {
    size: "sm",
    onClick: onToggle,
    transition: "all",
    ...(open
      ? {
          variant: "plain",
          borderColor: "gray.800",
          _hover: {
            borderColor: "gray.600",
            color: "yellow.600",
          },
        }
      : {
          bg: "gray.800",
          _hover: {
            bg: "gray.700",
            color: "yellow.400",
          },
        }),
  };

  return {
    post,
    comment,
    isPostCreator,
    buttonProps,
    open,
    fields,
    handleChange,
    user
  };
};

export type UseFormCommentReturnType = ReturnType<typeof useFormComment>;
