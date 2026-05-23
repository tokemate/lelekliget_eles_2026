import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    date: z.date(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { blog };
