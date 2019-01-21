(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("本以为用框架以及用熟练后，到达了一个美丽的小湖泊，读源码发现原来还有一望无际的海洋，壮丽的雪山，浩淼的星辰。")]),t._v(" "),s("p",[t._v("读webpack对面试也没什么用（刷leetcode，面试题更有用），你说你看webpack学会了啥，一时半会也说不清楚，但就是想看，想就去做，只要不危害他人")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("如果你想知道webpack的算法实现\n"),s("br"),t._v("我建议你看这个"),s("a",{attrs:{href:"https://github.com/lihongxun945/diving-into-webpack",target:"_blank",rel:"noopener noreferrer"}},[t._v("git地址"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("虽然写的不够好，但是已经是我能找到的中写的最好的\n"),s("br"),t._v("里面更多记录了怎么跟踪的过程\n"),s("br"),t._v("你能学到如何调试以及阅读源码\n"),s("br"),t._v("知道webpack页面架构\n"),s("br"),t._v("webpack哪些模块实现了什么功能")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("自己用webpack搭建一个项目,甚至是现成的读webpack都可以")]),t._v(" "),t._m(8),t._v(" "),s("p",[s("br"),t._v("参考npm的"),s("a",{attrs:{href:"https://docs.npmjs.com/cli/run-script#description",target:"_blank",rel:"noopener noreferrer"}},[t._v("run-script文档"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("npm run会自动添加node_module/.bin 到当前命令所用的PATH变量中，\n因此，npm run build 会执行package.json配置的build，目前我配置的是webpack，\n实际会调用 node_modules/.bin/webpack\n打开项目找到node_modules/.bin/webpack，需要点耐心，需要翻很多\nwebpack是一个符号连接\n指到了webpack/bin/webpack.js")]),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("第一行是")]),t._v(" "),t._m(10),s("p",[t._v("它被称为 Shebang。")]),t._v(" "),s("p",[t._v("/usr/bin/env 不是一个路径，而是一个命令，\n后面跟node 参数，就会找到node并调用它。")]),t._v(" "),t._m(11),s("p",[t._v("log 调试")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/visionmedia/debug",target:"_blank",rel:"noopener noreferrer"}},[t._v("颜色log DEGUB"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("用这个打印log会区分颜色，事实上我用着，也没那么好用")]),t._v(" "),s("p",[t._v("顺便讲一下吧")]),t._v(" "),s("p",[t._v("安装")]),t._v(" "),t._m(12),s("p",[t._v("在要调试的文件中\n定义")]),t._v(" "),t._m(13),s("p",[t._v("请把react-beauty-highcharts替换成你的文件名，这样才会有log")]),t._v(" "),t._m(14),s("p",[t._v("这个有个缺点就是如果json比较大，每一行都会打印一遍debug-webpack webpack webpack.js名字，不好复制,还是console.log() 好使")]),t._v(" "),s("p",[t._v("我们打开文件，里面主要处理了一些安装的逻辑\n没安装包报错之类的\n找到")]),t._v(" "),t._m(15),s("p",[t._v("接下来打开webpack-cli/bin/cli.js")]),t._v(" "),s("p",[t._v("241行")]),t._v(" "),t._m(16),s("p",[t._v("我们分析convert-argv模块")])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"浅析webpack源码之前言（一）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浅析webpack源码之前言（一）","aria-hidden":"true"}},[this._v("#")]),this._v(" 浅析webpack源码之前言（一）")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"为什么读webpack源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么读webpack源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么读webpack源码")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("因为前端框架离不开webpack，天天都在用的东西啊，怎能不研究")]),t._v(" "),s("li",[t._v("读源码能学到很多做项目看书学不到的东西，比如说架构，构造函数，es6很边缘的用法，甚至给函数命名也会潜移默化的影响等")]),t._v(" "),s("li",[t._v("想写源码，不看源码怎么行，虽然现在还不知道写什么，就算不写什么，看看别人写的总可以吧")]),t._v(" "),s("li",[t._v("知道世界的广阔，那么多插件，那么多软件开发师，他们在做什么，同样是写js的，怎么他们能这么伟大")]),t._v(" "),s("li",[t._v("好奇心")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"为什么写webpack源码系列文章博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么写webpack源码系列文章博客","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么写webpack源码系列文章博客")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("我可以只读不写的，这样还读的更快，只是后面想起了，不知道读了啥，读vue的时候好多都没有记录，但是即便那样当我再次看到那个函数我知道那是做什么")]),this._v(" "),a("li",[this._v("给公司写的项目代码，如果项目被砍，感觉白写了一样")]),this._v(" "),a("li",[this._v("为了证明自己的存在，证明自己来过")]),this._v(" "),a("li",[this._v("如果通过看这个文章你能能学到丝毫的知识，是我之幸✌️")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"看这个你能学到什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#看这个你能学到什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 看这个你能学到什么")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"如何读webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何读webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何读webpack")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"当你npm-run-build-发生了什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#当你npm-run-build-发生了什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" 当你npm run build 发生了什么？")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"log大法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log大法","aria-hidden":"true"}},[this._v("#")]),this._v(" log大法")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("#!/usr/bin/env node\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("$ /usr/bin/env node --version\nv10.11.0\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("npm i -D debug\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" log "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'debug'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'debug-webpack webpack webpack.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'你想打印的'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("DEBUG=react-beauty-highcharts* npm run build\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cliPath "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("resolve")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dirname")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pkgPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pkg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bin"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("installedClis"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("binName"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 引入了路径看到打印了路径是node_modules/webpack-cli/bin/cli.js")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cliPath"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\toptions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"./convert-argv"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("argv"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("err")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);