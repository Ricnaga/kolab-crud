import { useForm } from "react-hook-form";
import { profileResolver, ProfileSchemaType } from "./profile.schema";
import { useAppSelector } from "@/contexts/RTK/store";
import { userValue } from "@/contexts/RTK/features/user/user.slice";
import { useState } from "react";
import { useUpdateUserMutation } from "@/infra/users";

export const useProfile = () => {
  const user = useAppSelector(userValue);

  const { isPending, mutate } = useUpdateUserMutation();

  const { register, handleSubmit } = useForm<ProfileSchemaType>({
    resolver: profileResolver,
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

  return { register, onSubmit, isEnabled, setAsEnabled, isPending };
};

export type UseProfileReturnType = ReturnType<typeof useProfile>;
