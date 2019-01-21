(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"浅析webpack源码之nodeenvironmentplugin模块总览（六）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅析webpack源码之nodeenvironmentplugin模块总览（六）","aria-hidden":"true"}},[t._v("#")]),t._v(" 浅析webpack源码之NodeEnvironmentPlugin模块总览（六）")]),t._v(" "),n("p",[t._v("进入webpack.js")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 传入地址,new Compiler出来一个复杂对象")]),t._v("\ncompiler "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Compiler")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 把options挂载到对象上")]),t._v("\ncompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeEnvironmentPlugin")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("apply")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("compiler太复杂\n"),n("br"),t._v("我们先看NodeEnvironmentPlugin")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NodeWatchFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./NodeWatchFileSystem"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NodeOutputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"./NodeOutputFileSystem"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" NodeJsInputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"enhanced-resolve/lib/NodeJsInputFileSystem"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CachedInputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"enhanced-resolve/lib/CachedInputFileSystem"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeEnvironmentPlugin")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token function"}},[t._v("apply")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t    "),n("span",{attrs:{class:"token comment"}},[t._v("// 可以缓存输入的文件系统")]),t._v("\n\t\tcompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("CachedInputFileSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeJsInputFileSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token number"}},[t._v("60000")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 输入文件系统")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" inputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" compiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputFileSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 输出文件系统，挂载到compiler对象")]),t._v("\n\t\tcompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("outputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeOutputFileSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 传入输入文件，监视文件系统，挂载到compiler对象")]),t._v("\n\t\tcompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("watchFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeWatchFileSystem")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\t\tcompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputFileSystem\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("// 添加事件流before-run")]),t._v("\n\t\tcompiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("beforeRun"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("tap")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"NodeEnvironmentPlugin"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compiler "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inputFileSystem "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" inputFileSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" inputFileSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("purge")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" NodeEnvironmentPlugin"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("打开插件NodeJsInputFileSystem.js")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n"),n("span",{attrs:{class:"token string"}},[t._v('"use strict"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"graceful-fs"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("NodeJsInputFileSystem")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),n("span",{attrs:{class:"token comment"}},[t._v("//读取目录下文件")]),t._v("\n\t"),n("span",{attrs:{class:"token function"}},[t._v("readdir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tfs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readdir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token function"}},[t._v("callback")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" files "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" files"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t  "),n("span",{attrs:{class:"token comment"}},[t._v("// 对文件名进行NFC格式化")]),t._v("\n\t\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("normalize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"NFC"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),n("span",{attrs:{class:"token comment"}},[t._v("//异步读取目录下文件")]),t._v("\n\t"),n("span",{attrs:{class:"token function"}},[t._v("readdirSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("readdirSync")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" files "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" files"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("map")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("normalize")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"NFC"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fsMethods "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"stat"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"statSync"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"readFile"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"readFileSync"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"readlink"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{attrs:{class:"token string"}},[t._v('"readlinkSync"')]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 同步fs方法")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("for")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),n("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" fsMethods"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tObject"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("defineProperty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NodeJsInputFileSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tconfigurable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\twritable"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tvalue"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fs"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("bind")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" NodeJsInputFileSystem"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),n("p",[t._v("graceful-fs就是对node 原生fs 做了一层封装，显得更优雅")]),t._v(" "),n("p",[t._v("总体看来NodeEnvironmentPlugin这个模块就是对文件做了处理，又重新封装了node.js 对fs模块做了以一些处理，文件的输入，输出，缓存，监听...")])])}],!1,null,null,null);o.options.__file="webpack6.md";s.default=o.exports}}]);