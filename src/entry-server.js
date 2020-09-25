import { createApp } from './app'

export default context => {
    // 因为有可能是异步路由钩子函数或组件,所以返回一个Promise,
    // 确保服务器能够等待所有内容渲染在渲染前就已经准备就绪
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();

        // 设置服务端当前路由的位置
        router.push(context.url);

        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComonents = router.getMatchedComponents();

            // 如果匹配不到路由,执行 reject 函数,并返回404
            if (!matchedComonents.length) {
                return reject({
                    code: 404
                });
            }

            // 对所有匹配的路由组件调用 `asyncData()`钩子函数进行数据预取
            Promise.all(matchedComonents.map(Component => {
                if (Component.asyncData) {
                    // console.log('==Component.asyncData==');
                    // console.log(Component);
                    return Component.asyncData({
                        store,
                        route: router.currentRoute
                    })
                }
            })).then(() => {
                // 在所有预取钩子(preFetch hook) resolve 后，
                // 我们的 store 现在已经填充入渲染应用程序所需的状态。
                // 当我们将状态附加到上下文，
                // 并且 `template` 选项用于 renderer 时，
                // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
                context.state = store.state
                // resolve 应用程序实例,以便渲染
                resolve(app);
            }).catch(reject)
        }, reject)
    })
}