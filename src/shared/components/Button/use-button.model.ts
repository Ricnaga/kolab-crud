import { ButtonProps, UseButtonProps } from "./button.types";

export const useButton = (props: UseButtonProps) => {
  const formattedProps: ButtonProps = !props.variant
    ? {
        ...props,
        variant: "solid",
        transition: "all",
        _hover: {
          filter: "brightness(105%)",
          _active: { filter: "brightness(110%)" },
        },
        backgroundGradient: "to-br",
        gradientFrom: "cyan.600",
        gradientVia: "cyan.500",
        gradientTo: "cyan.400",
      }
    : props;

  const isDisabled = props.disabled || props.isLoading 

  return { ...formattedProps, isDisabled };
};

export type UseButtonReturnType = ReturnType<typeof useButton>;
