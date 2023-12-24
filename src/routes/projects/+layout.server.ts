import { GITHUB_ACCESS_TOKEN } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from 'octokit';

type RepoList = GetResponseDataTypeFromEndpointMethod<
	typeof octokit.rest.repos.listForAuthenticatedUser
>;
const octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

async function getAllRepos(page = 1, repos: RepoList = []) {
	const response = await octokit.rest.repos.listForAuthenticatedUser({
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
