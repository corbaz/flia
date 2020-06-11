import view from '../../views/products.html';

export default () => {
	const div = document.createElement('div');
	div.classList = 'text-primary';
	div.innerHTML = view;
	return div;
};
