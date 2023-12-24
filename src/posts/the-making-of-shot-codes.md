---
title: The Making of shot.codes
description: An attempt at documenting the process (in retrospect) of making this my webpage.
date: '2023-12-23'
categories:
  - sveltekit
  - svelte
published: false
---

# {title}

## Preface

I've used an embarrassing amount of time trying to create a personal website. Okay, perhaps not that much time, but I've lost count of the amount of times I've typed `mkdir shot.codes && cd shot.codes && git init` only to scrap the attempt after making it halfway to _something_. Throughout this seemingly endless endeavour I've touched about every Javascript framework known to man (and yet, there still seems to be a near-infinite number of them I haven't touched 🤔). I've over-engineered, under-engineered, everything in-between... I think I will leave my full journey for another post if I find the time in the future. The primary reason for this posts existence is to inaugurate the first implementation I have seen to something resembling completion.

From the onset, I had three basic requirements;

- Performant images for my photography
- Blog posts rendered from markdown
- Everything static

On the surface they are simple enough, but I'm a particular person and as such there are implicit requirements underneath the surface. **Performant images**; for me to be able to actually feel motivated and encouraged to get my photos online, I demand a workflow that is minimal effort. Anything more complicated then tossing source images into an appropriately named folder and pushing it to repo would fall short. As such, this was what I strived for. **Markdown blog posts**; by the same token I wanted to be able to author blog posts easily from my phone, while maintaining the ability to include interactive elements should I see fit. On top of that I wanted to embrace brutalist HTML, drawing all focus to my content, rather than my css because frankly there are better things to use time on than styling. The solution I've ended up with, which you are looking at now, is perhaps still a little over-engineered for my liking but it was the best path for me to achieve what I was in search for. I now have my desired low effort workflows for images and blog posts, but am also able to hop in when I find the time to add luxuries where I see fit.

The site is built with [Sveltekit](https://kit.svelte.dev/). Although I would have liked to say I raw-dogged HTML, I found that svelte offers just enough control and flexibility while not deviating significantly from vanilla JS and being _as much_ of a shitshow as something like React or Vue. I've also had a lot of fun with [Threlte](https://threlte.xyz/) and wanted to be able to be able to integrate it into the site where appropriate. _Huge shout out to Grischa, Alex, and everyone else involved in making Threlte the enjoyable experience it is today._

Enough said... I'll now attempt to detail how I ended up implementing my current solution.

## Performant Images

As I mentioned, it was imperative that my workflow for uploading images was as streamlined as possible. As it stands now, this is my workflow:

1. Create a directory in `static/images/`, named appropriately as it will be used for the title of the collection.
2. Toss all the images I want as part of the collection into the directory.
3. Move on with my life.

To make this happen was surprisingly straight forward. It begins with grabbing all the images and making them available to my photography page for rendering the collection list, as well as links to full sized images. I do this in a `+layout.server.ts`, the full code of which is shown below. It's self-explanatory, read directories with `readdirSync` and return them.

```ts
import type { LayoutServerLoad } from './$types';
import { readdirSync } from 'node:fs';

export const load = (async () => {
	const collections = readdirSync('static/images', { withFileTypes: true })
		.filter((f) => f.isDirectory())
		.map((f) => f.name);

	return { collections };
}) satisfies LayoutServerLoad;
```

The list of collections is then consumed in the corresponding `+layout.svelte`, where I create a link to each collection:

```svelte
{#each data.collections as collection}
	<a
		href="/photography/{collection}"
		class=" mx-2 hover:underline"
		title={collection.toUpperCase()}
		class:italic={$page.url.href.includes(collection)}
		class:font-bold={$page.url.href.includes(collection)}
	>
		{collection.toUpperCase()}
	</a>
{/each}
```

At this point all I need to do is grab the actual images for each collection at build time so they are available on a collections respective page. This is accomplished in `[collection]/+page.server.ts`:

```ts
import type { PageServerLoad } from './$types';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { error } from '@sveltejs/kit';
import type ImageSet from 'web-image-gen-svelte';

export const load = (({ params }) => {
	let collectionConfig: ImageSet;
	try {
		const data = readFileSync(`./src/lib/assets/images/_gen/${params.collection}.json`, 'utf-8');
		collectionConfig = JSON.parse(data);

		const collectionSources = readdirSync(`./static/images/${params.collection}`)
			.filter((file) =>
				['.png', '.jpg', '.jpeg', '.gif'].includes(path.extname(file).toLowerCase())
			)
			.map((fileName) => `/images/${params.collection}/${fileName}`);

		return {
			collection: params.collection,
			collectionConfig,
			collectionSources
		};
	} catch (error) {
		console.error('Error occurred while reading directory:', error);
	}

	throw error(404, 'This is not the collection you are looking for...');
}) satisfies PageServerLoad;
```

You've probably noticed that grabbing the source images isn't _all_ I do. I'm grabbing a `.json` file for each collection from `src/lib/assets/images/_gen/`. This is generated at build time by [web-image-gen](https://github.com/brev/web-image-gen). It is responsible for taking all my source images that I've lazily tossed into `static/Images` (that are at least a couple of Mb each) and generates optimized `.webp` images in a variety of sizes. It additionally provides luxuries like blurry placeholders that I am grateful for.
