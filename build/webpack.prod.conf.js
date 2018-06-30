const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig,{
    mode:'production',
    output:{
        filename:"js/[name].[chunkhash:8].js"
    },
    plugins:[
       new HtmlWebpackPlugin({
           template:'public/index.html',
           inject:'body',
           minify:{
               removeComments:true,
               collapseWhitespace:true,
               removeAttributeQuotes:true
           }
       }),
       new CleanWebpackPlugin(['../dist'],{
           allowExternal:true
       })
    ],
    
    optimization:{
        //代码抽离
        splitChunks:{
            chunks:"all",
            minChunks:1,
            minSize:0,
            cacheGroups:{
                frameworks:{
                    test:"framework",
                    name:"framework",
                    enforce:true
                }
            }
        }
    }
})