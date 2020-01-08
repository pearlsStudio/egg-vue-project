# egg-project-server

skeletons 的 server 端以 [egg](https://eggjs.org/zh-cn/) 为基础，统一了目录结构、编码规范、内置了安全策略，以强规范的形式
约束开发者。保证了团队间代码风格的统一，目录结构清晰。利于相互之间的 review 。避免了项目交接即重构的尴尬场景。

skeletons 以骨架的形式，试用于各个业务场景。同时提供了 [skeleton-barracks](http://git.jd.com/FE/skeleton-barracks) 项目，
在 [skeleton-barracks](http://git.jd.com/FE/skeleton-barracks) 项目中，我们提供了之前总结出来的一些公共服务。针对不同业务
场景(eg. 控制台/运营后台) 也有对应的插件，开发者可以针对不同场景引入相应的插件。同时也欢迎开发者通过 PR/ISSUE 的形式共同推进。


## 快速入门

skeletons 的 server 端的技术栈基于 [egg](https://eggjs.org/zh-cn/)，并不断向上封装。

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。


### 部署

```bash
$ npm start
$ npm stop
```

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
