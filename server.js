// const Vue = require('vue');
const express = require('express');
const server = require('express')();
const mime = require('mime');
const path = require('path');
const fs = require('fs');

const { createBundleRenderer } = require('vue-server-renderer')


// const resolve = file => path.resolve(__dirname + './dist', file)

// 配置页面静态资源路径
// const serve = (path, cache) => express.static(resolve(path), {
//   maxAge: 0
// })
// server.use('/', serve('../dist/'))
// server.use('/static', serve('./dist/static'))




// 已经打包出built-server-bundle.js文件的情况导入.
// const createApp = require('./dist/built-server-bundle.js')

// 读取模板
const template = fs.readFileSync('./index.template.html', 'utf-8');

const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

// 数据注入-模板中的插值表达式会解析这里定义的对应变量
const ctxData = {
    title: '深圳市好鲜生科技有限公司',
    metas: `
        <meta name="keyword" content="TMS运输系统,冷链物流系统,冷链运输系统,智慧冷链物流,冷链物流信息化系统,冷链配送系统,冷链运输企业,冷链管理,深圳市冷链信息化企业,运驿多">
        <meta name="description" content="好鲜生科技有限公司专注于传统冷链运输企业数字化转型,好鲜生已经为沃尔玛、晨光、赛诺菲、华润万家、中国医药集团、本来生活、联合利华、永和大王、小肥羊等提供业界领先的数字化冷链物流服务">
    `,
};

// render
// 在生成 vue-ssr-server-bundle.json 之后，只需将文件路径传递给 createBundleRenderer
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template,
    clientManifest // （可选）客户端构建 manifest
});


// 服务
server.get('*', (req, res) => {
    const context = {
        url: req.url,
        ...ctxData
    }
    const URL = req.url;
    // console.log(URL);
    if (URL.startsWith('/static')) {
        fs.readFile(`./dist${URL}`, (err, data) => {
            // console.log('====================================================================================================');
            // console.log(data);
            if (err) {
                res.writeHead(404, {
                    'Content-Type': 'text/plain; charset=UTF-8'
                });
                res.end('404 Not found');
            } else {
                const contentType = mime.getType(path.extname(URL));
                res.writeHead(200, {
                    'Content-Type': contentType
                });
                // console.log('data->');
                res.end(data || '');
            }
        })
    } else {
        renderer.renderToString(context, (err, html) => {
            // console.log(err);
            if (err) {
                if (err.code === 404) {
                    res.writeHead(404, {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    });
                    res.end('请求的资源或路径不存在!');
                } else {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    });
                    res.end('服务器错误!' + err);
                }
            } else {
                // console.log(res);
                // html已经是完整页面
                res.end(html);
            }

            // res.end(html);
        });
    }


});

server.listen(1024);