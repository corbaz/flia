import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';
import { router } from './router/router';

router(window.location.hash);
console.log('1ra :>> ', window.location.hash);
window.addEventListener('hashchange', () => {
	router(window.location.hash);
});
