/**
 * 首页模块
 */
export default [{
  path: '/home',
  name: 'home',
  component: resolve => {
    // 使用 Webpack 的 Code-Splitting
    require(['views/home'], resolve)
  },
  meta: {},
  children: []
}]
