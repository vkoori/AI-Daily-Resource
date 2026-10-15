import { defineCollection, z } from 'astro:content';

const items = defineCollection({
  type: 'content',
  schema: z.object({
    // Human-readable title. Kept in its original language (usually English)
    // since it typically names a product, paper, or repo.
    title: z.string(),

    // The date this entry was added to the digest (drives the daily archive).
    date: z.date(),

    // The source's own publish date, when known and different from `date`.
    // Lets us distinguish "published today" from "older but still valuable".
    originalDate: z.date().optional(),

    // Display name of the source, e.g. "Anthropic", "arXiv", "GitHub", "Hugging Face".
    source: z.string(),

    // Direct link to the primary source.
    url: z.string().url(),

    // Slug referencing src/data/categories.json. New slugs can be added there
    // freely; this field is intentionally a free string, not a closed enum,
    // so new categories never require a schema change.
    category: z.string(),

    // Persian-language summary: what it is, why it matters, how to use it.
    summary: z.string(),

    // Optional short tags for extra filtering/search (English terms are fine).
    tags: z.array(z.string()).optional().default([]),

    // Rough content type, used for small badges in the UI.
    kind: z
      .enum(['news', 'technique', 'tool', 'paper', 'reference', 'case-study'])
      .optional()
      .default('news'),

    // Whether the claim was checked against an official/primary source.
    verified: z.boolean().optional().default(true),
  }),
});

export const collections = { items };
