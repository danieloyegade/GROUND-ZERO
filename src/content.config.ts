import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    descriptor: z.string(),
    status: z.string().default("placeholder"),
  }),
});

export const collections = {
  projects,
};
