import { pages } from '../controllers/controllers';
let main = document.getElementById('main');

const router = async (ruta) => {
	main.innerHTML = '';
	//console.log('ruta', ruta);
	switch (ruta) {
		case '':
			return main.appendChild(pages.home());
		case '#/':
			return main.appendChild(pages.home());
		case '#/product':
			return main.appendChild(pages.products());
		case '#/post':
			return main.appendChild(await pages.posts());
		default:
			return main.appendChild(pages._404());
	}
};

export { router };
