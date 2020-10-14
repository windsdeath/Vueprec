const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
module.exports ={
    mode:'development',
    devtool:'eval',
    resolve:{
        extensions:['.vue', '.js']
    },
    entry:{
        app:path.join(__dirname,'main.js')
    },
    module:{
        rules:[{
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use:[
                'vue-style-loader',  
                {
                loader: 'css-loader',
                options: {
                  esModule: false,
                }},
            ],
        }
    ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],
    output:{
        filename:'app.js',
        path: path.join(__dirname,'dist')
    },
};