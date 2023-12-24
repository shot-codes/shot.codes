import type { PageServerLoad } from './$types';
import { github, user } from '$lib/server/githubApi';

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

	return {
		topics,
		readme
	};
};
