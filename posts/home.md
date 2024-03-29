<!-- TOC -->

- [Book series](#book-series)
- [Computer science](#computer-science)
  - [Standards](#standards)
  - [Book](#book)
- [Data structure & Algorithms](#data-structure--algorithms)
- [Road map](#road-map)
- [Programming](#programming)
- [Languages](#languages)
  - [JavaScript/TypeScript](#javascripttypescript)
  - [Golang](#golang)
  - [Cpp](#cpp)
- [Build tools](#build-tools)
- [Micro-frontend](#micro-frontend)
- [React.js](#reactjs)
- [Frontend engendering](#frontend-engendering)
  - [Webpack plugins](#webpack-plugins)
  - [Development utils](#development-utils)
  - [command line](#command-line)
- [Nodejs backend development](#nodejs-backend-development)
  - [Node.js server](#nodejs-server)
  - [ORM](#orm)
- [Rendering strategy](#rendering-strategy)
  - [Static site generator](#static-site-generator)
  - [Universal rendering](#universal-rendering)
  - [Pre-rendering](#pre-rendering)
- [Headless browser API](#headless-browser-api)
- [UI](#ui)
  - [UI framework & components](#ui-framework--components)
  - [AnimationCSS, WebGL, SVG, Canvas](#animationcss-webgl-svg-canvas)
  - [Visualizer & Chart](#visualizer--chart)
- [Network debugging](#network-debugging)
- [Testing framework](#testing-framework)
- [CI](#ci)
- [Monitor](#monitor)
- [Project management](#project-management)
- [Business tech](#business-tech)
  - [Media development](#media-development)
  - [Access control](#access-control)
  - [Rich text](#rich-text)

<!-- /TOC -->

## Book series

|                           tutorial/book(s) name                           |                       description                       |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------: |
|         Architecture of Internet product<sup>[Github][aoip]</sup>         |                 现实中的互联网公司架构                  |
|            CSS inspiration<sup>[Github][css inspiration]</sup>            |                        CSS 技巧                         |
|        hacker-laws<sup>[EN][hack-laws en] [CN][hack-laws cn]</sup>        |      对开发人员有用的定律、原则、模式、理论等信息       |
|              Hacks plaining<sup>[Site][hacks-plaining]</sup>              | 常见网络攻击示例，如 `XSS`, `CSRF`，`SQL injection`等。 |
| Digital video introduction<sup>[Github][digital video introduction]</sup> |         图像、音视频、及其编解码等基础知识介绍          |
|       Node.js best practice<sup>[Github][node best practices]</sup>       |                 `Node` 项目最佳实践探究                 |
|  Markdown/MDX with Next.js<sup>[nextjs.org][nextjs-blog-markdown]</sup>   |           如何在 next.js 中使用 MDX/Markdown            |

[aoip]: https://github.com/davideuler/architecture.of.internet-product
[css inspiration]: https://github.com/chokcoco/CSS-Inspiration
[hack-laws en]: https://github.com/dwmkerr/hacker-laws
[hack-laws cn]: https://github.com/nusr/hacker-laws-zh
[hacks-plaining]: https://www.hacksplaining.com/lessons
[digital video introduction]: https://github.com/leandromoreira/digital_video_introduction
[node best practices]: https://github.com/goldbergyoni/nodebestpractices
[nextjs-blog-markdown]: https://nextjs.org/blog/markdown

## Computer science

### Standards

|               name                |                                                        description                                                         |
| :-------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
|            [HTTP 1.1]             |                                                      `HTTP 1.1` 标准                                                       |
|         [OAUTH 2][oauth2]         |                                              开放授权协议（`OAUTH 2.0`）标准                                               |
|               [TCP]               |                                                         `TCP` 协议                                                         |
| [HTTP State Management Mechanism] | `HTTP` 状态管理机制，`HTTP` 本身为状态上层通信协议，而该标准作为 `HTTP` 状态管理实现的补充协议，用于规范 `Cookie` 的行为。 |

[http 1.1]: https://tools.ietf.org/html/rfc2616
[oauth2]: https://tools.ietf.org/html/rfc6749
[tcp]: https://tools.ietf.org/html/rfc793
[http state management mechanism]: https://tools.ietf.org/html/rfc6265

### Book

|                           name                           |         description          |
| :------------------------------------------------------: | :--------------------------: |
| High Performance Browser Networking<sup>[EN][hpbn]</sup> | 《web 性能权威指南》英文原版 |

[hpbn]: https://hpbn.co/

## Data structure & Algorithms

|                                      app                                      |                    description                     |
| :---------------------------------------------------------------------------: | :------------------------------------------------: |
| Algorithms, 4th Edition<sup>[EN][algs4], [Code in Github][algs4-github]</sup> |               《算法第四版》英文原文               |
|                                [Visualgo.net]                                 |            常见基础算法和数据结构可视化            |
|  Javascript algorithms and Data structures<sup>[Github][js algorithms]</sup>  |          通过 `JS` 实现常见算法与数据结构          |
|                              [LeetCodeAnimation]                              |               LeetCode 解题思路动画                |
|                            [algorithm-visualizer]                             |            可交互式的在线算法可视化平台            |
|    Learning JavaScript Design Patterns<sup>[EN][js-design-patterns]</sup>     | 通过 `JS` 实现各种设计模式，作者为 `Google` 工程师 |

[visualgo.net]: https://visualgo.net/zh
[leetcodeanimation]: https://github.com/MisterBooo/LeetCodeAnimation
[algorithm-visualizer]: https://github.com/algorithm-visualizer/algorithm-visualizer
[algs4]: https://algs4.cs.princeton.edu/home/
[algs4-github]: https://github.com/kevin-wayne/algs4
[js algorithms]: https://github.com/trekhleb/javascript-algorithms
[js-design-patterns]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/

## Road map

|                              name                               |                    description                     |
| :-------------------------------------------------------------: | :------------------------------------------------: |
| Web Developer roadmap<sup>[github][web developer roadmap]</sup> | `Front-end` & `Back-end` & `DevOps` 学习路径参考图 |

[web developer roadmap]: https://github.com/kamranahmedse/developer-roadmap

## Programming

|            app            |                      description                       |
| :-----------------------: | :----------------------------------------------------: |
| Rxjs<sup>[EN][rxjs]</sup> | 响应式 `JavaScript` 拓展库。更利于书写异步或回调流程。 |

[rxjs]: https://github.com/ReactiveX/rxjs

## Languages

### JavaScript/TypeScript

|                                                                name                                                                 |                                                                                  description                                                                                   |
| :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                You Don't Know JS (book series)<sup>[CN][ydkj-cn] [EN][ydkj-en]</sup>                                |                                                                        你不知道的 `JS` 系列丛书英文原版                                                                        |
|                                                   [tsconfig-paths-webpack-plugin]                                                   | 用于在 `webpack` 中自动解析 `tsconfig` 中的 `baseUrl` 和 `paths` 选项（二者共同作用，用于自定义路径别名），不再需要另外在 `webpack` 配置中显式地添加 `tsconfig` 中的路径别名。 |
|                                                          [How to graphql]                                                           |                                                                    `GraphQL` 社区指南，包含前端和后端实现。                                                                    |
|                               TypeScript Deep Dive<sup>[EN][ts-deep-dive] [CN][ts-deep-dive-cn]</sup>                               |                                                                          一本开源的 `typescript` 指南                                                                          |
| How to read es specification(ECMA 262)<sup>[github][github-how-to-read-es-spec]</sup> <sup>[online][site-how-to-read-es-spec]</sup> |                                                                    如何阅读 [ECMA 262][spec-ecma-262] 标准                                                                     |
|                                      babel handbook<sup>[github][github-babel-handbook]</sup>                                       |                                                                                   babel 手册                                                                                   |

[ydkj-cn]: https://github.com/JoeHetfield/You-Dont-Know-JS
[ydkj-en]: https://github.com/getify/You-Dont-Know-JS
[ts-deep-dive]: https://github.com/basarat/typescript-book/
[ts-deep-dive-cn]: https://jkchao.github.io/typescript-book-chinese/#why
[tsconfig-paths-webpack-plugin]: https://github.com/dividab/tsconfig-paths-webpack-plugin
[how to graphql]: https://www.howtographql.com/
[github-how-to-read-es-spec]: https://timothygu.me/es-howto/
[site-how-to-read-es-spec]: https://github.com/TimothyGu/es-howto
[spec-ecma-262]: https://tc39.es/ecma262/
[github-babel-handbook]: https://github.com/jamiebuilds/babel-handbook

### Golang

|                            name                             | description |
| :---------------------------------------------------------: | :---------: |
|              [GO 语言设计与实现][golang-impl]               |      -      |
|           [GO 语言圣经][go-programming-language]            |      -      |
| [The ultimate Go study guide][github-gotraining-studyguide] |      -      |

[golang-impl]: https://draveness.me/golang/
[go-programming-language]: https://books.studygolang.com/gopl-zh/
[github-gotraining-studyguide]: https://github.com/ardanlabs/gotraining-studyguide

### Cpp

|                               name                               |                 description                  |
| :--------------------------------------------------------------: | :------------------------------------------: |
|                           [Learn CPP]                            |       一个详细地 [cpp][learn cpp] 教程       |
|       learning V8 <sup>[Github][github-learning-v8]</sup>        |                 学习 V8 引擎                 |
| [v8][doc-v8] API references guide<sup>[online][doc-v8-api]</sup> | v8 源码文档参考，根据源码注释由 doxygen 生成 |

[learn cpp]: https://www.learncpp.com/
[github-learning-v8]: https://github.com/danbev/learning-v8
[doc-v8]: https://v8.dev/docs
[doc-v8-api]: https://v8docs.nodesource.com/

## Build tools

|            app            |                                         description                                         |
| :-----------------------: | :-----------------------------------------------------------------------------------------: |
|     [wmr][github-wmr]     | all-in-one development tool for modern web apps, in a single 2mb file with no dependencies. |
|   [astro][github-astro]   |                                     static site builder                                     |
|    [vite][github-vite]    |                                bundler，构建在 esbuild 之上                                 |
| [esbuild][github-esbuild] |                                          compiler                                           |
|     [swc][github-swc]     |                                          compiler                                           |

[github-wmr]: https://github.com/preactjs/wmr
[github-astro]: https://github.com/snowpackjs/astro
[github-vite]: https://github.com/vitejs/vite
[github-esbuild]: https://github.com/evanw/esbuild
[github-swc]: https://github.com/swc-project/swc

## Micro-frontend

用于解决新项目与项目的兼容问题，及多团队并行开发。

|           app           |                                description                                 |
| :---------------------: | :------------------------------------------------------------------------: |
| [phodal/microfrontends] | `microfrontends` 理论及实践<sup>[website](https://microfrontends.cn)</sup> |
|      [single-spa]       |                  支持多个前端框架的 `microfrontends` 框架                  |

[phodal/microfrontends]: https://github.com/phodal/microfrontends
[single-spa]: https://github.com/CanopyTax/single-spa

## React.js

|                      app                      |                                                                                                             description                                                                                                             |
| :-------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|          [react-fiber-architecture]           |           由 `React.js` 核心团队成员讲解 `React.js v16+` 中的协调引擎（[reconciliation][react-reconciliation] engine），以实现 `DOM` 树的 **增量式** 渲染（More: [isfiberreadyyet.com]、[fiber principle]、[CN version]）           |
|                 [React-Redux]                 |                                                                                                 用于 `React.js` 的 `Redux` 官方封装                                                                                                 |
|            [advanced react hooks]             |                                                                                                       `react hooks` 高阶指南                                                                                                        |
|       [React lifecycle methods diagram]       |                                                                                                        `React` 生命周期图解                                                                                                         |
|         [react-typescript-cheatsheet]         |                                                                                                  `React` 中 `typescript` 语法技巧                                                                                                   |
|        [react-redux-typescript-guide]         |                                                                                  `react` 与 `redux` 共建 `app` 的 `typescript` 类型安全的语法指南                                                                                   |
|                 [redux-saga]                  | 适用于组合多个 `action` 等复杂异步流程场景<sup>[阿里 umi 作者关于 redux 的实践总结](https://github.com/sorrycc/blog/issues/1)</sup>，`redux-thunk`，`redux-promise` 均只适用于简单的异步流程，`redux-saga` 更易统一复杂的异步流程。 |
|        [react typescript cheatsheets]         |                                                                                                      `Typescript React` 速查表                                                                                                      |
|     [awesome react][github-awesome-react]     |                                                                                                           `React.js` 生态                                                                                                           |
| [react-virtualized][github-react-virtualized] |                                                                                                          `react` 虚拟滚动                                                                                                           |
|      [react-window][github-react-window]      |                                                                                                  同 `react-virtualized`，但更精简                                                                                                   |

[react-redux]: https://github.com/reduxjs/react-redux
[advanced react hooks]: https://github.com/kentcdodds/advanced-react-hooks
[react lifecycle methods diagram]: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
[react-fiber-architecture]: https://github.com/acdlite/react-fiber-architecture
[react-reconciliation]: https://reactjs.org/docs/reconciliation.html
[isfiberreadyyet.com]: http://isfiberreadyyet.com/
[fiber principle]: https://github.com/facebook/react/issues/7942
[cn version]: https://github.com/luxp/react-fiber-architecture-cn
[react-typescript-cheatsheet]: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
[react-redux-typescript-guide]: https://github.com/piotrwitek/react-redux-typescript-guide
[redux-saga]: https://github.com/redux-saga/redux-saga
[react typescript cheatsheets]: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets
[github-awesome-react]: https://github.com/enaqx/awesome-react
[github-react-virtualized]: https://github.com/bvaughn/react-virtualized
[github-react-window]: https://github.com/bvaughn/react-window

## Frontend engendering

### Webpack plugins

|           app            |                             description                              |
| :----------------------: | :------------------------------------------------------------------: |
| [workbox-webpack-plugin] |                     `workbox` 的 `webpack` 插件                      |
|       [WebpackBar]       |             `webpack` 构建进度可视化，支持格式化输出结果             |
|        [purgecss]        |                            清除无用 `css`                            |
|        [minipack]        | 简易 modern module bundler 实现，可用于学习前端 `bundler` 的实现原理 |
|        [workbox]         |                   `PWA` 离线 `App shell` 缓存管理                    |
| [workbox-webpack-plugin] |                     `workbox` 的 `webpack` 插件                      |
|  [prerender-spa-plugin]  |     基于谷歌无界面浏览器 API [puppeteer] 的单页面应用预渲染插件      |

[workbox]: https://github.com/GoogleChrome/workbox
[workbox-webpack-plugin]: https://www.npmjs.com/package/workbox-webpack-plugin
[webpackbar]: https://github.com/nuxt/webpackbar
[purgecss]: https://github.com/FullHuman/purgecss
[minipack]: https://github.com/ronami/minipack
[prerender-spa-plugin]: https://github.com/chrisvfritz/prerender-spa-plugin

### Development utils

|      utils       |                 description                  |
| :--------------: | :------------------------------------------: |
| [path-to-regexp] | 将路径字符串转换为正则表达式，以用于路径匹配 |
|     [svg.js]     |        轻量级 `svg` 绘图以及动画工具         |
|    [chokidar]    |          一个 nodejs 端文件监听工具          |

[path-to-regexp]: https://github.com/pillarjs/path-to-regexp
[svg.js]: https://github.com/svgdotjs/svg.js
[chokidar]: https://github.com/paulmillr/chokidar

### command line

|      app       |                                                                   description                                                                   |
| :------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|    [yargs]     |                         在创建 nodejs cli 时，推荐使用 `yargs` 作为命令行参数解析工具，其额外提供全套 cli 创建流程工具                          |
|    [globby]    |                                                          `fast-glob` 的 `Promise` 封装                                                          |
|   [fs-extra]   |                                                             原生 `fs` 模块的升级版                                                              |
| [Commander.js] |                                                         基于 `node.js` 的命令行接口工具                                                         |
| [Inquirer.js]  |                                                                 命令行交互工具                                                                  |
|    [execa]     |        建立 `node.js` 副线程的工具，本质是原生 [child_progress] 模块的实现。常用于解决同时多开 `node` 窗口的问题（[示例][execa-sample]）        |
| [cross-spawn]  | 基于当前 process 在 child_process 中运行额外的命令，是 [child_process.spawn] 和 child_process.spawnSync 的跨平台封装，`create-react-app` 在使用 |

[commander.js]: https://github.com/tj/commander.js
[inquirer.js]: https://github.com/SBoudrias/Inquirer.js
[execa]: https://github.com/sindresorhus/execa
[child_progress]: https://nodejs.org/api/child_process.html
[execa-sample]: https://github.com/lbwa/jsonp/blob/master/scripts/genChangelog.js#L24-L28
[globby]: https://github.com/sindresorhus/globby
[fs-extra]: https://github.com/jprichardson/node-fs-extra
[cross-spawn]: https://github.com/moxystudio/node-cross-spawn
[child-process.spawn]: https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options
[yargs]: https://github.com/yargs/yargs

## Nodejs backend development

### Node.js server

|      app       |                                     description                                     |
| :------------: | :---------------------------------------------------------------------------------: |
|    [nestjs]    |            (受 [Angular] 启发) 建立高效、可拓展的 `Node.js` 服务端应用。            |
|    [eggjs]     |                    蚂蚁金服开源的基于 `koa` 的 `nodejs` 开发框架                    |
|   [fastify]    |       高效的，低消耗的 `web` 服务开发框架<sup>[Github][github-fastify]</sup>        |
|    [strapi]    |                               `Node.js` 内容管理框架                                |
| [jsonwebtoken] |       [JSON web tokens] 的 `Node.js` 实现（[更多实现][more-json-web-token]）        |
|  [node-uuid]   |                                  `Unique id` 生成                                   |
|     [pino]     |                                `Node.js` 端日志工具                                 |
|    [nanoid]    | A tiny (108 bytes), secure, URL-friendly, unique string ID generator for JavaScript |

[使用案例]: https://github.com/lbwa/vue-ssr/blob/7a971f15e38f7b5bb9b2a1c5dab118afea64bfca/server/server.js#L40
[strapi]: https://github.com/strapi/strapi
[nestjs]: https://github.com/nestjs/nest
[angular]: https://angular.io/
[eggjs]: https://eggjs.org/
[fastify]: https://www.fastify.io/
[github-fastify]: https://github.com/fastify/fastify
[jsonwebtoken]: https://github.com/auth0/node-jsonwebtoken
[json web tokens]: https://tools.ietf.org/html/rfc7519
[more-json-web-token]: https://jwt.io/introduction/
[node-uuid]: https://github.com/kelektiv/node-uuid
[pino]: https://github.com/pinojs/pino
[nanoid]: https://github.com/ai/nanoid

### ORM

|            app            |                    description                    |
| :-----------------------: | :-----------------------------------------------: |
|  [prisma][github-prisma]  | nodejs orm([Object–relational mapping][wiki-orm]) |
| [typeorm][github-typeorm] |                    nodejs orm                     |

[github-prisma]: https://github.com/prisma/prisma
[github-typeorm]: https://github.com/typeorm/typeorm
[wiki-orm]: https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping

## Rendering strategy

### Static site generator

|            app            |                        description                        |
| :-----------------------: | :-------------------------------------------------------: |
|         [next.js]         |                    `React` 服务端渲染                     |
|         [Gatsby]          |     基于 `React.js` 和 `GraphQL`(可选) 的静态站生成器     |
|        [vuepress]         |      `Vue.js` 官方维护的基于 `Vue.js` 的静态站生成器      |
| [Github personal website] | `Github` 开源的 `Github` 风格的 `Ruby` 个人静态站生成器。 |
| [codedoc][github-codedoc] |                 风格美观的文档站点构建器                  |

[github personal website]: https://github.com/github/personal-website
[gatsby]: https://www.gatsbyjs.org/docs/quick-start
[vuepress]: https://github.com/vuejs/vuepress
[github-codedoc]: https://github.com/CONNECT-platform/codedoc

### Universal rendering

> SSG, SSR, CSR, etc.

|    app     |                            description                            |
| :--------: | :---------------------------------------------------------------: |
| [next.js]  |                        `React` 服务端渲染                         |
|   [nuxt]   | `Vue.js` 框架（支持 SSR），主要用于构建应用程序，亦可制作静态站点 |
| [vue-meta] |   自定义向 SSR 服务端模板注入 head 标签中的信息，如 meta, title   |

[nuxt]: https://zh.nuxtjs.org/
[vue-meta]: https://github.com/declandewet/vue-meta
[next.js]: https://github.com/zeit/next.js

### Pre-rendering

|                                         lib                                         |                            description                            |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------: |
| [static-site-generator-webpack-plugin][github-static-site-generator-webpack-plugin] | [docusaurus][github-docusaurus] 和 [gatsby.js][gatsby] 都有在使用 |

[github-static-site-generator-webpack-plugin]: https://github.com/markdalgleish/static-site-generator-webpack-plugin
[github-docusaurus]: https://github.com/facebook/docusaurus

## Headless browser API

|     app     |                                                                          description                                                                           |
| :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [puppeteer] | `Google` 基于 `Nodejs` 的 `Chrome` 浏览器无界面 API，可用于自动化测试，**_SPA 预渲染_**（如 [prerender SPA plugin]） 等。（[拓展阅读][puppeteer-more-detail]） |

[puppeteer]: https://github.com/GoogleChrome/puppeteer
[puppeteer-more-detail]: https://juejin.im/entry/5a3aa0e86fb9a045076fd385

## UI

### UI framework & components

|             app             |                                                 description                                                  |
| :-------------------------: | :----------------------------------------------------------------------------------------------------------: |
| [@material/linear-progress] |                `material design` [linear progress indicator][@material/linear-progress demo]                 |
|          [primer]           | `Github` 官方 `UI` 设计原则，其中包含 `react` 组件（[@primer/components]）和 `CSS` 框架（[@primer/css]）等。 |
|        [medium-zoom]        |                                     用于实现 `medium` 风格的图片点击放大                                     |

[@material/linear-progress]: https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress
[@material/linear-progress demo]: https://material-components.github.io/material-components-web-catalog/#/component/linear-progress-indicator
[primer]: https://primer.style/
[@primer/components]: https://github.com/primer/components
[@primer/css]: https://github.com/primer/css
[medium-zoom]: https://github.com/francoischalifour/medium-zoom

### Animation(CSS, WebGL, SVG, Canvas)

|             app             |                                                       description                                                        |
| :-------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| [Three.js][github-three.js] | 一个 `WebGL`，`Canvas 2D`，`SVG`，`CSS 3D`， 渲染器<sup>[Github][github-three.js],</sup><sup>[Site](site-three.js)</sup> |
|          [pixi.js]          |                                                    2D `WebGL` 渲染器                                                     |
|  [WebGL-Fluid-Simulation]   |                                                   一个 `WebGL` 的示例                                                    |
|          [animejs]          |                                                一个体积不大的前端动画引擎                                                |

[pixi.js]: https://github.com/pixijs/pixi.js
[webgl-fluid-simulation]: https://github.com/PavelDoGreat/WebGL-Fluid-Simulation
[github-three.js]: https://github.com/mrdoob/three.js/
[site-three.js]: https://threejs.org/
[animejs]: https://github.com/juliangarnier/anime

### Visualizer & Chart

|               app               |                                    description                                     |
| :-----------------------------: | :--------------------------------------------------------------------------------: |
|             [D3.js]             |                           `svg`、`canvas`、`HTML` 图表库                           |
|             [nivo]              |                         `React.js` 版的 `D3` 构建 wrapper                          |
|           [Chart.js]            |                            `HTML5` 图表 `<canvas>` 插件                            |
|           [@antv/f2]            |                         蚂蚁金服 `F2` 移动端图表可视化方案                         |
|            [echarts]            |                              百度桌面端图表可视化方案                              |
|      [d3-state-visualizer]      | 将一个 `store` 对象映射为一个 `d3` 视图<sup>[demo][d3-state-visualizer-demo]</sup> |
|    [D3.js 教程][d3-scrimba]     |                          位于 `scrimba` 的 `d3` 视频教程                           |
| [webgl 基础][webgl-fundamental] |                                  `webgl` 基础教程                                  |
|       [regl][github-regl]       |                                   函数式 `WebGL`                                   |

[d3.js]: https://github.com/d3/d3
[chart.js]: https://github.com/chartjs/Chart.js
[@antv/f2]: https://github.com/antvis/f2
[nivo]: https://github.com/plouc/nivo
[echarts]: https://github.com/apache/incubator-echarts
[d3-state-visualizer]: https://github.com/reduxjs/d3-state-visualizer
[d3-state-visualizer-demo]: http://reduxjs.github.io/d3-state-visualizer/
[d3-scrimba]: https://scrimba.com/g/gd3js
[webgl-fundamental]: https://github.com/gfxfundamentals/webgl-fundamentals
[github-regl]: https://github.com/regl-project/regl

## Network debugging

|      app      |                                                                                description                                                                                 |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  [zan proxy]  |                                                                        实现 web debug 时的网络代理                                                                         |
|   [whistle]   |                                                                        实现 web debug 时的网络代理                                                                         |
| [lightproxy]  |                                                                 作用同上，阿里巴巴跨平台 web 开发代理工具                                                                  |
|  [vConsole]   |                                                                   一种 `console` 的实现，用于移动端调试                                                                    |
| [json server] |                                                                                 Mock 数据                                                                                  |
|     [ip]      |                                                                    Node.js 下探测本机设备在内网中的 ip                                                                     |
|   [address]   |                              Node.js 下探测本机设备在内网中的 ip（如 `10.*.*.*` 或 `172.*.*.*`）, `@vue/cli-service` 和 `gatsby` 等库的依赖。                              |
|    [ngrok]    | 内网穿透工具，用于将内网 `server` 映射到公网域名下，使得外网可以访问内网的 `local server`。常用场景：[微信测试号]（开发环境下的 公众号）的网页授权中的 [redirect_url] 映射 |
|     [frp]     |                                                              `frp`，一个可用于内网穿透的高性能的反向代理应用                                                               |
|     [nps]     |                                                                                内网穿透工具                                                                                |

[vconsole]: https://github.com/Tencent/vConsole
[zan proxy]: https://github.com/youzan/zan-proxy
[json server]: https://github.com/typicode/json-server
[whistle]: https://github.com/avwo/whistle
[lightproxy]: https://github.com/alibaba/lightproxy
[frp]: https://github.com/fatedier/frp
[ngrok]: https://ngrok.com/
[nps]: https://github.com/cnlh/nps
[微信测试号]: https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index
[redirect_url]: https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842

## Testing framework

|         app          |                                                                        description                                                                        |
| :------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
|        [jest]        |                                                                 Facebook 开源单元测试框架                                                                 |
|        [AVA]         |                                                               并发执行实现下的 JS 测试框架                                                                |
|      [cypress]       |                                                                       e2e 测试框架                                                                        |
| [@testing-library/*] | Simple and complete testing utilities that encourage good testing practices，单测工具最佳实践，推荐与 `jest` 搭配。支持 `React.js`，`Vue.js` 等库或框架。 |
| [hey][github-rakyll] |                                                               类似于 ApacheBench 的压测工具                                                               |

[jest]: https://jestjs.io/
[ava]: https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md
[cypress]: https://github.com/cypress-io/cypress
[@testing-library/*]: https://github.com/testing-library/react-testing-library
[address]: https://github.com/node-modules/address
[ip]: https://github.com/indutny/node-ip
[github-rakyll]: https://github.com/rakyll/hey

## CI

|    name    |                       description                        |
| :--------: | :------------------------------------------------------: |
| [argos ci] | 自动化 **视觉** UI 回归测试，被 antd 和 material UI 采纳 |

[site-argos-ci]: https://www.argos-ci.com/

## Monitor

|                     app                     |               description                |
| :-----------------------------------------: | :--------------------------------------: |
| [sentry-onpremise][github-sentry-onpremise] | 基于 docker 的一站式私有 sentry 服务搭建 |

[github-sentry-onpremise]: https://github.com/getsentry/onpremise

## Project management

|               app               |                                  description                                  |
| :-----------------------------: | :---------------------------------------------------------------------------: |
|            [carbon]             |                             `macOS` 风格源码截图                              |
|         [Terminalizer]          |                             `terminal` 终端记录仪                             |
|            [Motrix]             |      支持 `HTTP, FTP, BitTorrent, Magnet, Baidu Net Disk` 的全特性下载器      |
|       [all-contributors]        | 识别当前库的所有 `contributors` 并在 README 中输出一个 contributors 的表格。  |
|             [lerna]             |                    用于管理多个 `npm packages` 包开发流程                     |
|             [tsdx]              |              Zero-config CLI for TypeScript package development               |
|          [size-limit]           | 计算当前 npm package 若被真实引入时的大小，并支持在 pr 时对超出的部分发出警告 |
| [excalidraw][github-excalidraw] |                           在线协同手绘风格思维导图                            |

[carbon]: https://github.com/dawnlabs/carbon
[terminalizer]: https://github.com/faressoft/terminalizer
[motrix]: https://github.com/agalwood/Motrix
[all-contributors]: https://github.com/all-contributors/all-contributors
[lerna]: https://github.com/lerna/lerna
[tsdx]: https://github.com/formium/tsdx
[size-limit]: https://github.com/ai/size-limit
[github-excalidraw]: https://github.com/excalidraw/excalidraw

## Business tech

### Media development

|  lib name   |                    description                     |
| :---------: | :------------------------------------------------: |
| [howler.js] |                   前端音频控制库                   |
| [filepond]  | 一个包含图片编辑，上传动画等特性的文件上传 `JS` 库 |

[howler.js]: https://github.com/goldfire/howler.js
[filepond]: https://github.com/pqina/filepond

### Access control

|              app              |                           description                           |
| :---------------------------: | :-------------------------------------------------------------: |
| [aliyun policy authorization] |                阿里云 `policy` 语法实现权限控制                 |
|        [accesscontrol]        |            可在浏览器和 `node.js` 端实现的权限控制库            |
|            [casl]             | 前端元素级别权限同构型控制 JS 库，受启发于 [CanCanCan for Ruby] |

[aliyun policy authorization]: https://help.aliyun.com/document_detail/28664.html?spm=a2c8b.12215508.policylist.2.ff466253ERVmtX
[accesscontrol]: https://github.com/onury/accesscontrol
[casl]: https://github.com/stalniy/casl
[cancancan for ruby]: https://github.com/CanCanCommunity/cancancan

### Rich text

| lib name  |        description         |
| :-------: | :------------------------: |
| [lunr.js] | 基于 JavaScript 的前端搜索 |

[lunr.js]: https://github.com/olivernn/lunr.js
