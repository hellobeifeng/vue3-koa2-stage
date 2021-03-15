# 前端项目脚手架

> 一个基于 vue3_cli 和 nodejs_koa2 的前端项目快速启动脚手架

---

## 一、技术栈

### I. 视图层

- `vue3`
- `typescript`
- `vue-router` - `history mode`
- `elementui-plus`

### II. 数据层

- `koa2`
- `mongoose`
- `基于装饰器封装的控制层`
- `函数式编程` - `Ramda`
- `统一格式化返回`

### III. 前端

- `动态路由`
- `支持基于RBAC权限控制格式的视图控制`
- `Commit 规范` - `基于业内最流行的标准`
- `本地开发环境配置`
- `明确项目文件夹结构`



## 二、项目使用
### I. 依赖安装

- `npm install`

### II. 本地开发

- `npm run dev-s`
- `npm run serve`
- 访问 `localhost:8080`


### III.生产环境

- `npm run build`
- `npm run release`
- 访问 `localhost:3000/stage`


### IV. 项目提交

- 【前置】全局安装 `commitizen`
- 【前置】选择适配器 `echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc`
- `npm run commit`或`git cz`
- 请保证严格依赖 `git commit 标准`
