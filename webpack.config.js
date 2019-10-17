const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                  /node_modules/.test(file) &&
                  !/\.vue\.js/.test(file)
                )
            },

            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'     
                }
                
            },

            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },

            {
                test: /\.(gif|svg|jpg|png)$/,
                use: [
                    'file-loader'
                ]
                    
            }

        ]
    },

    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ],

    // Added to be able to use vue-router
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    //devtool: '#eval-source-map'
};