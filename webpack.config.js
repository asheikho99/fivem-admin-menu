const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Q3RCon = require('quake3-rcon');

module.exports = {
    entry: {
        client: './client/client.ts',
        server: './server/server.ts',
    },
    output: {
        path: path.resolve(
            __dirname,
            'path\\to\\resources'
        ),
        filename: '[name]/[name].js',
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 200,
        poll: 1000,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap(
                    'AfterEmitPlugin',
                    (compilation) => {
                        const rcon = new Q3RCon({
                            address: '127.0.0.1',
                            port: '30120',
                            password: 'password',
                        });

                        rcon.send('restart project', (response) => {
                            console.log(response);
                        });
                    }
                );
            },
        },
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
