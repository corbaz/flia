import view from '../../views/posts.html';

const cargarPosts = async () => {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await posts.json();
};

export default async () => {
	const div = document.createElement('div');
	div.classList = 'text-success';
	div.innerHTML = view;

	const ulPosts = div.querySelector('#ulPosts');
	const totalPosts = div.querySelector('#totalPosts');

	const Posts = await cargarPosts();
	totalPosts.innerHTML = Posts.length;
	console.log('totalPosts', Posts.length);
	Posts.forEach((post, index) => {
		ulPosts.innerHTML += `
			<li class="list-group-item">
				<h5>${index} - ${post.title}</h5>
				<p>${post.body}</p>
			</li>
		`;
	});
	return div;
};
