import { Button, Grid, Spinner } from "@chakra-ui/react";
import { FormFields } from "../../context/use-profile-context";
import { CheckboxProfile } from "./components/CheckboxProfile";
import { InputProfile } from "./components/InputProfile";
import { FormUserViewProps } from "./form-user.types";

export const FormUserView = (props: FormUserViewProps) => {
  const { isEnabled, isPending, onSubmit, register, setAsEnabled } = props;

  return (
    <form onSubmit={onSubmit}>
      {Object.entries(FormFields).map(([key, value]) => (
        <InputProfile
          key={key}
          label={value}
          {...register(key as keyof typeof FormFields, {
            disabled: !isEnabled,
          })}
        />
      ))}

      <Grid gap={4} mt={4}>
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
      </Grid>
    </form>
  );
};
