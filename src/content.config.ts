import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    descriptor: z.string(),
    display: z.object({
      frame: z.enum(["portrait", "landscape", "wide", "hero"]),
      slot: z.enum([
        "hero-left",
        "portrait-right-high",
        "wide-center",
        "landscape-right",
        "portrait-left",
        "portrait-right",
        "hero-center",
        "portrait-right-low",
        "landscape-left",
        "landscape-right-low",
      ]),
      objectPosition: z.string().default("center center"),
      objectFit: z.enum(["cover", "contain"]).default("cover"),
    }),
    status: z.string().default("placeholder"),
  }),
});

export const collections = {
  projects,
};
