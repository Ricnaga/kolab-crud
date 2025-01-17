import useUserContext from "@/contexts/Profile";
import { FormFields } from "@/contexts/Profile/use-profile-context";
import { Button, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CheckboxProfile } from "./components/CheckboxProfile";
import { InputProfile } from "./components/InputProfile";

export default function Profile() {
  const {
    isLoading,
    fields,
    handleUpdate,
    isPending,
    isEnabled,
    setAsEnabled,
    handleChange,
  } = useUserContext();

  return (
    <form onSubmit={handleUpdate}>
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
            isLoading={isLoading}
            key={key}
            label={value}
            disabled={!isEnabled}
            onChange={(e) => handleChange(e, key)}
            value={fields[key as keyof typeof FormFields]}
          />
        ))}

        <CheckboxProfile
          disabled={isLoading}
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
}
