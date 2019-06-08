import App from './app.svelte';
import map from '../posts/title-link-post.js';

const target = document.body;
const props = { map };
const app = new App({ target, props });

export default app;
