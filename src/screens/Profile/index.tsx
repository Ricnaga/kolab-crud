import { useUpdateUserMutation, useUserQuery } from "@/infra/users";
import {
  Button,
  CardRoot,
  Checkbox,
  Field,
  Input,
  SimpleGrid,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

type FieldState = {
  name: string;
  username: string;
  email: string;
  addressStreet: string;
  addressSuite: string;
  addressCity: string;
  addressZipcode: string;
  phone: string;
  website: string;
  companyName: string;
};

export default function Profile() {
  const { data, isLoading } = useUserQuery({ id: "1" });
  const { mutate, isPending } = useUpdateUserMutation();

  const [isEnabled, setAsEnabled] = useState<boolean>(false);
  const [fields, setFields] = useState<FieldState>({
    name: "",
    username: "",
    email: "",
    addressStreet: "",
    addressSuite: "",
    addressCity: "",
    addressZipcode: "",
    phone: "",
    website: "",
    companyName: "",
  });

  useEffect(() => {
    setFields({
      name: data?.name || "",
      username: data?.username || "",
      email: data?.email || "",
      addressStreet: data?.address.street || "",
      addressSuite: data?.address.suite || "",
      addressCity: data?.address.city || "",
      addressZipcode: data?.address.zipcode || "",
      phone: data?.phone || "",
      website: data?.website || "",
      companyName: data?.company.name || "",
    });
  }, [data]);

  if (isLoading)
    return (
      <CardRoot
        display={"grid"}
        p={4}
        gap={8}
        mt={2}
        maxW={538}
        mx={"auto"}
        marginTop={10}
      >
        {Array.from({ length: 10 }).map(() => (
          <Skeleton key={Math.random().toString()} h={10} />
        ))}
      </CardRoot>
    );

  function handleUpdate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate(
      {
        id: data?.id || 0,
        name: fields.name,
        username: fields.username,
        email: fields.email,
        phone: fields.phone,
        website: fields.website,
        company: {
          name: fields.companyName,
          catchPhrase: data?.company.catchPhrase || "",
          bs: data?.company.bs || "",
        },
        address: {
          street: fields.addressStreet,
          suite: fields.addressSuite,
          city: fields.addressCity,
          zipcode: fields.addressZipcode,
          geo: {
            lat: data?.address.geo.lat || "",
            lng: data?.address.geo.lng || "",
          },
        },
      },
      {
        onSuccess: () => console.log("ATUALIZADO COM SUCESSO"),
        onError: () => console.error("ERRO AO ATUALIZAR COMENTÁRIO"),
      }
    );
  }

  return (
    <form onSubmit={handleUpdate}>
      <SimpleGrid
        gap={2}
        w={"full"}
        h={"full"}
        maxW={"32rem"}
        mx={"auto"}
        marginTop={"1rem"}
      >
        <Field.Root>
          <Field.Label>Nome</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            value={fields.name}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Usuário</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) => setFields({ ...fields, username: e.target.value })}
            value={fields.username}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>E-mail</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            value={fields.email}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Rua</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) =>
              setFields({ ...fields, addressStreet: e.target.value })
            }
            value={fields.addressStreet}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Complemento</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) =>
              setFields({ ...fields, addressSuite: e.target.value })
            }
            value={fields.addressSuite}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Cidade</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) =>
              setFields({ ...fields, addressCity: e.target.value })
            }
            value={fields.addressCity}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>CEP</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) =>
              setFields({ ...fields, addressZipcode: e.target.value })
            }
            value={fields.addressZipcode}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Telefone</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) => setFields({ ...fields, phone: e.target.value })}
            value={fields.phone}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Website</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) => setFields({ ...fields, website: e.target.value })}
            value={fields.website}
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Empresa</Field.Label>
          <Input
            disabled={!isEnabled}
            bg={"yellow.50"}
            px={2}
            className="peer"
            placeholder=""
            onChange={(e) =>
              setFields({ ...fields, companyName: e.target.value })
            }
            value={fields.companyName}
          />
        </Field.Root>
        <Checkbox.Root
          variant={"subtle"}
          onCheckedChange={(e) => setAsEnabled(!!e.checked)}
          checked={isEnabled}
        >
          <Checkbox.HiddenInput />
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Label>Habilitar campos</Checkbox.Label>
        </Checkbox.Root>
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
