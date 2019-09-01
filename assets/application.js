import App from './components/App.svelte';
import './scss/application.scss';

const app = new App({
	target: document.querySelector('#app'),
	props: {
		name: 'world'
	}
});

export default app;