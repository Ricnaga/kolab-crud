import useHomeContext from "@/screens/Home/context";
import { USER_BYUSER_ID_POSTS } from "@application/router/paths";
import { ButtonProps, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FieldStateType, UseFormPostProps } from "./form-post.types";

export const useFormPost = (props: UseFormPostProps) => {
  const { post } = props;
  const navigate = useNavigate();

  const { handlePostCreator } = useHomeContext();
  const isPostCreator = handlePostCreator(post.userId);

  const [fields, setFields] = useState<FieldStateType>({
    title: post.title,
    body: post.body,
  });

  const handleChange = (key: keyof FieldStateType, value: string) =>
    setFields({ ...fields, [key]: value });

  const handleNextPage = (userId: string) =>
    navigate(USER_BYUSER_ID_POSTS.replace(":userId", userId));

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
    isPostCreator,
    buttonProps,
    open,
    fields,
    handleChange,
    handleNextPage,
  };
};

export type UseFormPostReturnType = ReturnType<typeof useFormPost>;
