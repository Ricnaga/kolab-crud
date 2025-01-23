import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useAppSelector } from "@/contexts/RTK/store";
import { useUpdateUserMutation } from "@/infra/users/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formUserResolver, FormUserSchemaType } from "./form-user.schema";

export const useFormUser = () => {
  const user = useAppSelector(userValue);

  const { isPending, mutate } = useUpdateUserMutation();

  const { register, handleSubmit } = useForm<FormUserSchemaType>({
    resolver: formUserResolver,
    values: {
      ...user,
      addressStreet: user.address.street,
      addressSuite: user.address.suite,
      addressCity: user.address.city,
      addressZipcode: user.address.zipcode,
      companyName: user.company.name,
    },
  });

  const [isEnabled, setAsEnabled] = useState<boolean>(false);

  const onSubmit = handleSubmit((data) =>
    mutate(
      {
        id: Math.round(Math.random() * 10),
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone,
        website: data.website,
        company: {
          ...user.company,
          name: data.companyName,
        },
        address: {
          street: data.addressStreet,
          suite: data.addressSuite,
          city: data.addressCity,
          zipcode: data.addressZipcode,
          geo: user.address.geo,
        },
      },
      {
        onSuccess: () => console.log("ATUALIZADO COM SUCESSO"),
        onError: () => console.error("ERRO AO ATUALIZAR COMENTÁRIO"),
      }
    )
  );
  return { isEnabled, isPending, onSubmit, register, setAsEnabled };
};

export type UseFormUserReturnType = ReturnType<typeof useFormUser>;
