export async function load({ fetch }) {
	const response = await fetch('api/posts');
	const posts: Blog.Post[] = await response.json();
	return { posts };
}

export const prerender = false;