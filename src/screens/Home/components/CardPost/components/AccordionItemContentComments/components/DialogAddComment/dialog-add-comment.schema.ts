import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const required_error = "Esse campo é obrigatório";

export const addCommentSchema = z
  .object({
    name: z.string({ required_error }),
    body: z.string({ required_error }),
  })
  .required();

export const addCommentResolver = zodResolver(addCommentSchema);

export type AddCommentSchemaType = z.infer<typeof addCommentSchema>;
