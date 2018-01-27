//fis.require('jello')(fis);
fis.set('namespace', 'website');

var PATH = '/Users/liuyao/Documents/code/dist';// 打包默认目录

fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: PATH
  })
})

// 设置 *.scss 配置配置项
fis.match('*.css', {
    rExt: '.css',
    useHash: false,
    parser: fis.plugin('node-sass', {
 
    })
});

fis.match('*.css', {
  postprocessor: fis.plugin('postcss', {
    autoprefixer: true
  })
});




fis.match('/public/js/**.js', {
  parser: fis.plugin('babel-5.x',{
    stage:3
  })
})


//处理打包
fis.match('/public/**.js', {
        useHash: false
    })
    .match('/public/**.css', {
        useSprite: true,
        useHash: false
    })



//发布产品库
fis.media('online').match('/public/**.js', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('/public/**.css', {
        optimizer: fis.plugin('clean-css', {
            'keepBreaks': true //保持一个规则一个换行
        })
    });
