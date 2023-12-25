import type { PageServerLoad } from './$types';
import { github, user } from '$lib/server/githubApi';
import withShiki from '@stefanprobst/remark-shiki';
import toHast from 'remark-rehype';
import withHtmlInMarkdown from 'rehype-raw';
import toHtml from 'rehype-stringify';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import shiki from 'shiki';

const highlighter = await shiki.getHighlighter({ theme: 'css-variables' });

export const load: PageServerLoad = async ({ params, fetch }) => {
	const response = await github.rest.repos.get({
		owner: user, // omit for current authenticated user
		repo: params.project
	});

	let topics: Array<string> = [];
	if (response.data.topics) {
		topics = response.data.topics?.filter((topic) => topic != 'shot-codes');
	}

	const readmeRaw = await fetch(
		`https://raw.githubusercontent.com/${user}/${params.project}/main/README.md`
	);
	const readme = await readmeRaw.text();

	const file = await unified()
		.use(remarkParse)
		// @ts-expect-error ts is giving an error on the type of withShiki, but it's from the docs and works
		.use(withShiki, { highlighter })
		.use(toHast, { allowDangerousHtml: true })
		.use(withHtmlInMarkdown)
		.use(toHtml)
		.process(readme);

	return {
		topics,
		readme: String(file)
	};
};
