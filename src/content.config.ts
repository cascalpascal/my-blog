// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // 최신 로더 필수 불러오기

const blog = defineCollection({
	// src/content/blog/ 폴더 안의 모든 마크다운(.md) 파일을 읽어오도록 경로 지정
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string().optional(),
		author: z.string().default('서은'),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog };