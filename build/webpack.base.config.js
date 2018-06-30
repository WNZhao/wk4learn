const path=require('path');
const DIST_PATH = path.resolve(__dirname,'../dist');
const APP_PATH = path.resolve(__dirname,'../app');
console.log(DIST_PATH);
module.exports={
    entry:{
        app:'./app/index.js',
        framework:['react','react-dom']
    },
    output:{
        filename:'js/bundle.js',
        path:DIST_PATH
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "babel-loader",
                include: APP_PATH
            }
        ]
    }
}