import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Schema compartilhado pelas 3 collections de blog (uma por locale).
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string().default("Be Free Tours"),
  publishDate: z.string(),
  updateDate: z.string().optional(),
  imageSlug: z.string(),
  category: z.string(),
  readTime: z.string(),
  relatedTours: z.array(z.string()).optional(),
  relatedPosts: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .optional(),
  featured: z.boolean().default(false),
});

// Uma collection por locale → id = slug puro (único na collection), sem prefixo.
// Resolve a ambiguidade do glob único (onde getEntry por slug não casava o id "en/slug")
// e deixa cada locale isolado para os cross-references dos templates (passo 4).
const blogCollection = (locale: string) =>
  defineCollection({
    loader: glob({
      base: `./src/content/blog/${locale}`,
      pattern: "**/*.{md,mdx}",
    }),
    schema: blogSchema,
  });

export const collections = {
  "blog-en": blogCollection("en"),
  "blog-es": blogCollection("es"),
  "blog-pt-br": blogCollection("pt-br"),
};
