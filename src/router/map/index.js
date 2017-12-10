// 不同模块应代码分离
import home from './home'

export default [
  // Vue 没有强制刷新操作，这算是 hack（使用 canReuse 可以解决部分问题）
  {
    path: '/',
    redirect: '/home'
  },

  // 首页模块
  ...home,
]
