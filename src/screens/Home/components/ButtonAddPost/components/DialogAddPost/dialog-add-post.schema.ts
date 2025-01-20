import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const required_error = "Esse campo é obrigatório";

export const addPostSchema = z
  .object({
    title: z.string({ required_error }),
    body: z.string({ required_error }),
  })
  .required();

export const addPostResolver = zodResolver(addPostSchema);

export type AddPostSchemaType = z.infer<typeof addPostSchema>;
