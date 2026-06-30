// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 최신 v6 로더 추가

const blog = defineCollection({
	// loader를 통해 마크다운 파일의 위치를 지정합니다.
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };