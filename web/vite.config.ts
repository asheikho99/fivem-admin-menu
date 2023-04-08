import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

import { OutputPlugin } from 'rollup';
import Q3Rcon from 'quake3-rcon';

const myOutputPlugin: OutputPlugin = {
    name: 'my-output-plugin',

    // Use the writeBundle hook to run a function after a successful build
    writeBundle() {
        console.log('Vite Build successful');

        // Create a new Q3Rcon instance with the server details
        const rcon = new Q3Rcon({
            address: '127.0.0.1',
            port: 30120,
            password: 'password',
        });

        rcon.send('restart project', (response) => {
            console.log(response);
        });
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: './',
    build: {
        outDir: 'path\\to\\resources\\web\\build',
        rollupOptions: {
            output: {
                plugins: [myOutputPlugin],
            },
        },
    },
});
