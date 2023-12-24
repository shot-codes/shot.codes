import { GITHUB_ACCESS_TOKEN } from '$env/static/private';
import { Octokit } from 'octokit';
import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';

export type RepoList = GetResponseDataTypeFromEndpointMethod<
	typeof github.rest.repos.listForAuthenticatedUser
>;

export const github = new Octokit({ auth: GITHUB_ACCESS_TOKEN });

const {
	data: { login }
} = await github.rest.users.getAuthenticated();

export { login as user };
