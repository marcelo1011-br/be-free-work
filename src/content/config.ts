// @ts-nocheck
/* ================================
   BE FREE TOURS - Content Collections Config
   Define o schema dos posts do blog
   ================================ */

import { defineCollection, z } from 'astro:content';

// Define a coleção "blog"
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Be Free Tours'),
    publishDate: z.string(),
    updateDate: z.string().optional(),
    imageSlug: z.string(), // Slug da imagem em src/images/blog/
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
  }),
});

// Exporta as coleções
export const collections = {
  blog,
};
