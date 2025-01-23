import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const required_error = "Esse campo é obrigatório";

export const formUserSchema = z
  .object({
    name: z.string({ required_error }),
    username: z.string({ required_error }),
    email: z.string({ required_error }),
    addressStreet: z.string({ required_error }),
    addressSuite: z.string({ required_error }),
    addressCity: z.string({ required_error }),
    addressZipcode: z.string({ required_error }),
    phone: z.string({ required_error }),
    website: z.string({ required_error }),
    companyName: z.string({ required_error }),
  })
  .required();

export const formUserResolver = zodResolver(formUserSchema);

export type FormUserSchemaType = z.infer<typeof formUserSchema>;
