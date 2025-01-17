import { useUpdateUserMutation, useUserQuery } from "@/infra/users";
import useContext from "@/shared/hooks/useContext";
import {
  ChangeEvent,
  createContext,
  FormEvent,
  useEffect,
  useState,
} from "react";

export enum FormFields {
  name = "Nome",
  username = "Usuário",
  email = "E-mail",
  addressStreet = "Rua",
  addressSuite = "Complemento",
  addressCity = "Cidade",
  addressZipcode = "Cep",
  phone = "Telefone",
  website = "Website",
  companyName = "Empresa",
}

type FieldState = Record<keyof typeof FormFields, string>;

export function useProfileProvider() {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: string) =>
    setFields({ ...fields, [key]: e.target.value });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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

  return {
    isEnabled,
    setAsEnabled,
    fields,
    setFields,
    isLoading,
    isPending,
    onSubmit,
    handleChange,
  };
}

export type UseProfileProviderReturnType = ReturnType<
  typeof useProfileProvider
>;

export const ProfileContext = createContext({} as UseProfileProviderReturnType);

function useProfileContext() {
  return useContext({
    context: ProfileContext,
    hookName: useProfileContext.name,
    providerName: "User",
  });
}

export default useProfileContext;
