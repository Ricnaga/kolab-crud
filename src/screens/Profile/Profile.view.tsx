import { Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ProfileViewProps } from "./profile.types";
import { FormFields } from "@/contexts/Profile/use-profile-context";
import { InputProfile } from "./components/InputProfile";
import { CheckboxProfile } from "./components/CheckboxProfile";

export const ProfileView = (props: ProfileViewProps) => {
  const { isEnabled, isPending, onSubmit, register, setAsEnabled } = props;

  return (
    <form onSubmit={onSubmit}>
      <SimpleGrid
        gap={2}
        w="full"
        h="full"
        maxW="32rem"
        justifySelf="center"
        marginTop="1rem"
      >
        {Object.entries(FormFields).map(([key, value]) => (
          <InputProfile
            key={key}
            label={value}
            {...register(key as keyof typeof FormFields, {
              disabled: !isEnabled,
            })}
          />
        ))}

        <CheckboxProfile
          onCheckedChange={(e) => setAsEnabled(!!e.checked)}
          checked={isEnabled}
          label="Habilitar campos"
        />
        <Button
          disabled={!isEnabled || isPending}
          type="submit"
          colorPalette={"cyan"}
        >
          {isPending ? <Spinner size={"sm"} /> : "Alterar"}
        </Button>
      </SimpleGrid>
    </form>
  );
};
