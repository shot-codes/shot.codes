import type { LayoutServerLoad } from './$types';
import { github, type RepoList } from '$lib/server/githubApi';

async function getAllRepos(page = 1, repos: RepoList = []) {
	const response = await github.rest.repos.listForAuthenticatedUser({
		visibility: 'public',
		per_page: 100,
		page: page
	});
	const fetchedRepos = response.data;
	if (fetchedRepos.length === 0) {
		return repos.concat(fetchedRepos);
	} else {
		return getAllRepos(page + 1, repos.concat(fetchedRepos));
	}
}

export const load: LayoutServerLoad = async () => {
	const allPublicRepos = await getAllRepos();
	const publishedRepos = allPublicRepos.filter((repo) => repo.topics?.includes('shot-codes'));
	return {
		repos: publishedRepos
	};
};
