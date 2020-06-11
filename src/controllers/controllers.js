import Home from './controllers_views/controller_home.js';
import Product from './controllers_views/controller_products.js';
import Posts from './controllers_views/controller_posts.js';
import _404 from './controllers_views/controller_404.js';

const pages = {
	home: Home,
	products: Product,
	posts: Posts,
	_404: _404,
};

export { pages };
