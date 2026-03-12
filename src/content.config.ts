import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    descriptor: z.string(),
    display: z.object({
      orientation: z.enum(["portrait", "landscape", "wide"]),
      cropFocus: z.enum(["center", "top", "upper-third"]).default("center"),
      size: z.enum(["small", "medium", "large", "hero"]).default("medium"),
    }),
    status: z.string().default("placeholder"),
  }),
});

export const collections = {
  projects,
};
