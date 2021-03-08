(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{196:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#git"}},[t._v("Git")]),s("ul",[s("li",[s("a",{attrs:{href:"#常用的-git-命令"}},[t._v("常用的 git 命令")])]),s("li",[s("a",{attrs:{href:"#多人使用-git-协作开发的基本流程"}},[t._v("多人使用 git 协作开发的基本流程")])]),s("li",[s("a",{attrs:{href:"#svn-和-git-的区别"}},[t._v("svn 和 git 的区别")])])])]),s("li",[s("a",{attrs:{href:"#模块化"}},[t._v("模块化")]),s("ul",[s("li",[s("a",{attrs:{href:"#为何需要模块化"}},[t._v("为何需要模块化")])]),s("li",[s("a",{attrs:{href:"#使用模块化之后"}},[t._v("使用模块化之后")])]),s("li",[s("a",{attrs:{href:"#amd"}},[t._v("AMD")])]),s("li",[s("a",{attrs:{href:"#commonjs"}},[t._v("CommonJS")])]),s("li",[s("a",{attrs:{href:"#amd-和-commonjs-的不同使用场景"}},[t._v("AMD 和 CommonJS 的不同使用场景")])])])]),s("li",[s("a",{attrs:{href:"#模块化-直接看代码演示-code-webpack"}},[t._v("模块化-直接看代码演示 /code/webpack")])]),s("li",[s("a",{attrs:{href:"#上线和回归"}},[t._v("上线和回归")]),s("ul",[s("li",[s("a",{attrs:{href:"#上线和回滚的流程"}},[t._v("上线和回滚的流程")])]),s("li",[s("a",{attrs:{href:"#linux-服务器的基本命令"}},[t._v("linux 服务器的基本命令")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h3",{attrs:{id:"常用的-git-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的-git-命令"}},[t._v("#")]),t._v(" 常用的 git 命令")]),t._v(" "),s("ul",[s("li",[t._v("git add .")]),t._v(" "),s("li",[t._v("git checkout xxx")]),t._v(" "),s("li",[t._v('git commit -m "xxx"')]),t._v(" "),s("li",[t._v("git push origin master")]),t._v(" "),s("li",[t._v("git pull origin master")]),t._v(" "),s("li",[t._v("git stash / git stash pop")])]),t._v(" "),s("h3",{attrs:{id:"多人使用-git-协作开发的基本流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多人使用-git-协作开发的基本流程"}},[t._v("#")]),t._v(" 多人使用 git 协作开发的基本流程")]),t._v(" "),s("ul",[s("li",[t._v("git branch")]),t._v(" "),s("li",[t._v("git checkout -b xxx / git checkout xxx")]),t._v(" "),s("li",[t._v("git merge xxx")])]),t._v(" "),s("h3",{attrs:{id:"svn-和-git-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svn-和-git-的区别"}},[t._v("#")]),t._v(" svn 和 git 的区别")]),t._v(" "),s("ul",[s("li",[t._v("svn 是每一步操作都离不开服务器，创建分支，提交代码都需要连接服务器。")]),t._v(" "),s("li",[t._v("git 可以在本地创建分支，提交代码，最后再一起 push 到服务器上。")]),t._v(" "),s("li",[t._v("git 拥有 svn 的所有功能，但是却比 svn 强大的多。")])]),t._v(" "),s("h2",{attrs:{id:"模块化-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化-2"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("p",[t._v("这一小节就不出题目了，因为它本身就是一个题目，范围也比较单一，就是模块化。")]),t._v(" "),s("h3",{attrs:{id:"为何需要模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为何需要模块化"}},[t._v("#")]),t._v(" 为何需要模块化")]),t._v(" "),s("ul",[s("li",[t._v("全局变量污染")]),t._v(" "),s("li",[t._v("引用多个模块后必须分清模块的依赖关系")])]),t._v(" "),s("h3",{attrs:{id:"使用模块化之后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用模块化之后"}},[t._v("#")]),t._v(" 使用模块化之后")]),t._v(" "),s("ul",[s("li",[t._v("直接"),s("code",[t._v('<script src="a.js"><\/script>')]),t._v("，其他的根据依赖关系自动引用")]),t._v(" "),s("li",[t._v("那两个函数，没必要做成全局变量，不会带来污染和覆盖")])]),t._v(" "),s("p",[t._v("以上只是我们理想的两个状态，接下来就说一下具体该如何去实现。")]),t._v(" "),s("h3",{attrs:{id:"amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd"}},[t._v("#")]),t._v(" AMD")]),t._v(" "),s("p",[t._v("AMD 模块化规范是比较早提出的，现在也是比较成熟的模块化规范，代表工具是"),s("code",[t._v("require.js")]),t._v("，使用之后它会定义两个全局函数")]),t._v(" "),s("ul",[s("li",[t._v("define 定义一个变量并返回，可供其他js引用")]),t._v(" "),s("li",[t._v("require 引用其他已经定义好的变量")]),t._v(" "),s("li",[t._v("依赖的代码会自动、异步加载")])]),t._v(" "),s("p",[t._v("拿上面的例子来做一个样例")]),t._v(" "),s("p",[t._v("首先是 util.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getFormatDate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-06-15'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017年6月15日'")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("然后是 a-util.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./util.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("util")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("aGetFormatDate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFormatDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最后是 a.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a-util.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("aUtil")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("printDate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("aUtil"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aGetFormatDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("接下来是如何引用，我们还得定义一个"),s("code",[t._v("main.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("然后在页面中引用"),s("code",[t._v('<script src="js/require.js" data-main="./main.js"><\/script>')]),t._v("，运行时注意，各个js文件会异步加载")]),t._v(" "),s("h3",{attrs:{id:"commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[t._v("#")]),t._v(" CommonJS")]),t._v(" "),s("p",[t._v("CommonJS 是 nodejs 中模块定义的规范，但是这种规范越来越被放在前端开发来使用（当然这需要构建工具的编译，下一节讲述），原因如下")]),t._v(" "),s("ul",[s("li",[t._v("前端开发依赖的插件和库，都可以从 npm 中获取")]),t._v(" "),s("li",[t._v("构建工具的高度自动化，使得使用 npm 的成本非常低")])]),t._v(" "),s("p",[t._v("CommonJS 不会异步加载各个JS，而是同步一次性加载出来")]),t._v(" "),s("p",[t._v("我们先来看一下 CommonJS 的输入和输出都是什么规范，然后下一节通过结合构建工具和 npm 一起演示一下使用方法。")]),t._v(" "),s("p",[t._v("util.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getFormatDate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-06-15'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017年6月15日'")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("a-util.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" util "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'util.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("aGetFormatDate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFormatDate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"amd-和-commonjs-的不同使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd-和-commonjs-的不同使用场景"}},[t._v("#")]),t._v(" AMD 和 CommonJS 的不同使用场景")]),t._v(" "),s("p",[t._v("CommonJS 解决的问题和 AMD 一样，只不过是不同的标准而已，他们没有孰好孰坏之分，只是不同的工具使用场景不一样而已。")]),t._v(" "),s("ul",[s("li",[t._v("使用 AMD：各种代码都是自己定义的，不用依赖于 npm")]),t._v(" "),s("li",[t._v("使用 CommonJS：依赖于 npm")])]),t._v(" "),s("h2",{attrs:{id:"模块化-直接看代码演示-code-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化-直接看代码演示-code-webpack"}},[t._v("#")]),t._v(" 模块化-直接看代码演示 /code/webpack")]),t._v(" "),s("p",[t._v("新建一模一样的项目练习熟练。。")]),t._v(" "),s("h2",{attrs:{id:"上线和回归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上线和回归"}},[t._v("#")]),t._v(" 上线和回归")]),t._v(" "),s("h3",{attrs:{id:"上线和回滚的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上线和回滚的流程"}},[t._v("#")]),t._v(" 上线和回滚的流程")]),t._v(" "),s("h4",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("ul",[s("li",[t._v("上线和回滚是开发过程中的重要流程")]),t._v(" "),s("li",[t._v("各个公司上线和回滚的流程都不一样")]),t._v(" "),s("li",[t._v("由有具体的工具或者系统来搞定，无需我们关心细节")]),t._v(" "),s("li",[t._v("你也许没有体会过这类规范的流程，但是你要知道一些要点")]),t._v(" "),s("li",[t._v("只说要点，不详细讲解，也没法详细讲解")])]),t._v(" "),s("h4",{attrs:{id:"上线原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上线原理"}},[t._v("#")]),t._v(" 上线原理")]),t._v(" "),s("ul",[s("li",[t._v("将测试完成的代码提交到git版本库的master分支")]),t._v(" "),s("li",[t._v("将当前服务器的代码全部打包并记录版本号，备份")]),t._v(" "),s("li",[t._v("将master分支的代码提交覆盖到线上服务器，生成新版本号")])]),t._v(" "),s("h4",{attrs:{id:"回滚原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回滚原理"}},[t._v("#")]),t._v(" 回滚原理")]),t._v(" "),s("ul",[s("li",[t._v("将当前服务器的代码打包并记录版本号，备份")]),t._v(" "),s("li",[t._v("将备份的上一个版本号解压，覆盖到线上服务器，并生成新的版本号")])]),t._v(" "),s("h3",{attrs:{id:"linux-服务器的基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-服务器的基本命令"}},[t._v("#")]),t._v(" linux 服务器的基本命令")]),t._v(" "),s("p",[t._v("线上服务器一般使用 linux 服务器，而且是 server 版本的 linux，没有桌面也没有鼠标，如何操作呢？")]),t._v(" "),s("p",[s("strong",[t._v("登录")])]),t._v(" "),s("p",[t._v("入职之后，一般会有现有的用户名和密码，拿来之后直接登录就行。运行 "),s("code",[t._v("ssh name@server")]),t._v(" 然后输入密码即可登录")]),t._v(" "),s("p",[s("strong",[t._v("目录操作")])]),t._v(" "),s("ul",[s("li",[t._v("创建目录 "),s("code",[t._v("mkdir")])]),t._v(" "),s("li",[t._v("删除目录 "),s("code",[t._v("rm -rf")])]),t._v(" "),s("li",[t._v("定位目录 "),s("code",[t._v("cd")]),t._v(" 返回上一级目录 cd ..")]),t._v(" "),s("li",[t._v("看当前目录 pwd")]),t._v(" "),s("li",[t._v("查看目录文件 "),s("code",[t._v("ls")]),t._v(" "),s("code",[t._v("ll")])]),t._v(" "),s("li",[t._v("修改目录名 "),s("code",[t._v("mv")])]),t._v(" "),s("li",[t._v("拷贝目录 "),s("code",[t._v("cp a.js a1.js 移动文件 mv a1.js src/a1.js")])])]),t._v(" "),s("p",[s("strong",[t._v("文件操作")])]),t._v(" "),s("ul",[s("li",[t._v("创建文件 "),s("code",[t._v("touch")]),t._v(" "),s("code",[t._v("vi /vim==>i(输入)==>esc(退出输入)==>:w(保存)==>:q(退出)")])]),t._v(" "),s("li",[t._v("删除文件 "),s("code",[t._v("rm")])]),t._v(" "),s("li",[t._v("修改文件名 "),s("code",[t._v("mv")])]),t._v(" "),s("li",[t._v("拷贝文件 "),s("code",[t._v("cp")]),t._v(" "),s("code",[t._v("scp")])])]),t._v(" "),s("p",[s("strong",[t._v("文件内容操作")])]),t._v(" "),s("ul",[s("li",[t._v("查看文件 "),s("code",[t._v("cat(全部)/head(前一部分)head -n 1 a.js/tail(后一部分)tail -n 2 a.js")])]),t._v(" "),s("li",[t._v("编辑文件内容 "),s("code",[t._v("vi /vim")])]),t._v(" "),s("li",[t._v("查找文件内容 "),s("code",[t._v("grep '2' a.js")])])])])}],!1,null,null,null);a.default=r.exports}}]);