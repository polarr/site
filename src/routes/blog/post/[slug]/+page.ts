import { error } from '@sveltejs/kit'

export async function load({ params }) {
	try {
        let post; 
        
		if (params.slug[0] == 'p'){
            post = await import(`../../../../blog/problem-journal/${params.slug}.md`);
        } else {
            post = await import(`../../../../blog/${params.slug}.md`);
        }

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find post ${params.slug}`);
	}
}