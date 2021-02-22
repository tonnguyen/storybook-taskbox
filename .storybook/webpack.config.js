const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = async ({ config, mode }) => {
    config.module.rules = config.module.rules.filter(
        rule => rule.test.toString() !== '/\\.css$/'
    );
    config.module.rules.push({
        test: /\.css$/,
        sideEffects: true,
        use: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
    });
    config.resolve.plugins = [
        new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, './tsconfig.json') })
    ];
    return config;
};