import { z, string } from "zod";

export const validationSchema = z.object({
  // by default the mentioned here only will be required
  name: z.string().min(2).max(20), // required
  email: z.string().email(), // required
  phone: z.string().optional(), // not required
  website: z.string().optional(), // not required
  address: z
    .object({
      city: z.string().optional(), // not required
      country: z.string().optional()
    })
    .optional(), // address itself is optional
  company: z
    .object({
      name: z.string().optional(),
      catchPhrase: z.string().optional()
    })
    .optional(),
  imageBase64: z.string().optional()
});
