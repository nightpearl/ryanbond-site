import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    years: z.string(),
    group: z.enum(['product', 'agency', 'community']),
    order: z.number(),
    cover: z.string(),
    summary: z.string(),
    product: z.string().optional(),
    role: z.string().optional(),
    client: z.string().optional(),
    type: z.string().optional(),
    agencies: z.string().optional(),
    comingSoon: z.boolean().optional(),
  }),
});

// Featured stories: the 4–6 deep case studies the site leads with.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    kicker: z.string(),
    years: z.string(),
    roles: z.array(z.string()),
    summary: z.string(),
    cover: z.string().optional(),
    order: z.number(),
    highlights: z.array(z.string()),
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { work, stories };
