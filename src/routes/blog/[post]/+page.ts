import type { PageLoad } from './$types';
// I should try this with a +page.ts.
// Basically I want to avoid calling default.render() I should be able to
// serialize the entire thing as a svelte component and then drop it in a
// <svelte:component this={data.content}/>
//
// Currently I get an error stating that default is not serializable
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.post}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.post}`);
	}
};
