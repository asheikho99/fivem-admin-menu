import App from './App.svelte';

const app = document.getElementById('app');
if (app) {
    new App({
        target: app,
    });
}

export default app;