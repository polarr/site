export async function load({ params, fetch }) {
	const response = await fetch('../../api/posts');
	let posts: Blog.Post[] = await response.json();
	let tag = params.tag.toLowerCase();
	posts = posts.filter(({ categories })=> categories.includes(tag as Blog.Categories));
	return { posts, tag };
}