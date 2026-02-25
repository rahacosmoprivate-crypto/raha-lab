import { defineCollection, z } from "astro:content";

const base = z.object({
  title: z.string(),
  lang: z.enum(["en","fa","ar"]),
  coverImage: z.string().optional(),
  excerpt: z.string().optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export const collections = {
  ingredients: defineCollection({
    type:"content",
    schema: base.extend({
      productCode: z.string().optional(),
      inciName: z.string().optional(),
      shortDescription: z.string().optional(),
      categories: z.array(z.string()).default([]),
      applications: z.array(z.string()).default([]),
      functions: z.array(z.string()).default([]),
      origin: z.string().optional(),
      form: z.string().optional(),
      solubility: z.string().optional(),
      status: z.string().optional(),
      compliance: z.array(z.string()).default([])
    })
  }),
  formulations: defineCollection({
    type:"content",
    schema: base.extend({
      formulaCode: z.string().optional(),
      formulationType: z.string().optional(),
      applicationArea: z.string().optional(),
      texture: z.string().optional(),
      difficulty: z.string().optional(),
      shortDescription: z.string().optional(),
      keyActives: z.array(z.string()).default([])
    })
  }),
  news: defineCollection({
    type:"content",
    schema: base.extend({
      postType: z.enum(["news","event"]).default("news"),
      publishedAt: z.string()
    })
  }),
  downloads: defineCollection({
    type:"content",
    schema: base.extend({
      fileUrl: z.string(),
      fileType: z.string().optional(),
      category: z.string().optional()
    })
  })
};
