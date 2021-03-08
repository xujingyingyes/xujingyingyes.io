(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{221:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("按着前两篇文章的思路，接下来我们应该思考一个问题：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("这是 LeetCode 第 652 题："),a("a",{attrs:{href:"https://leetcode-cn.com/problems/find-duplicate-subtrees/",target:"_blank",rel:"noopener noreferrer"}},[t._v("寻找重复子树"),a("OutboundLink")],1)]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("我来简单解释一下题目，输入的是一棵二叉树的根节点 root，返回的是一个列表，里面装着若干个二叉树节点，这些节点对应的子树在原二叉树中是重复存在的。")]),t._v(" "),a("p",[t._v("举个例子来说，比如输入如下二叉树：")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("首先节点 4 本身可以作为一棵子树，且二叉树中有多个节点 4:")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("类似的，还存在着两棵以 2 为根的重复子树：")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("那么我们返回的列表中就应该有两个 TreeNode，值分别为 4 和 2（具体是哪个节点无所谓）。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("比如你站在图中这个 节点 2 上：")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("如果你想知道以自己为根的子树是不是重复的，是否应该被加入结果列表中，你需要知道什么信息？")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("这叫知己知彼，我得知道自己是啥样，还有别人是啥样，才能知道有没有人和自己重复。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("其实看到这个问题就可以判断本题要用「后序遍历」框架来解决：")]),t._v(" "),t._m(12),a("p",[t._v("为什么？因为我们要知道以自己为根的子树长啥样，是不是得先知道左右子树长啥样，再加上自己就构成了一棵完整的子树，综上这不就是一个「后序遍历」框架吗。")]),t._v(" "),a("p",[t._v("我们都知道，在 JS 中的不同的引用变量即使长得一模一样，它们之间也是不相等的，因此我们需要将引用变量转换成基本变量，这就是「二叉树的序列化与反序列化」。")]),t._v(" "),a("p",[t._v("所以，我们可以通过拼接字符串的方式把二叉树序列化：")]),t._v(" "),t._m(13),a("p",[t._v("这样，我们第一个问题就解决了，对于每个节点，递归函数中的 subTree 变量就可以描述以该节点为根的二叉树。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("非常简单，我们只需要把每一次序列化之后的结果 memo 起来，然后在通过判断是否有相同的，即可判断出是否有重复：")]),t._v(" "),t._m(15)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"手把手带你刷二叉树（三期）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手把手带你刷二叉树（三期）"}},[this._v("#")]),this._v(" 手把手带你刷二叉树（三期）")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("如何判断我们应该用前序还是中序还是后序遍历的框架？")]),this._v("\n那么本文就针对这个问题，用一个例子来讲清楚， "),s("strong",[this._v("根据题意，思考一个二叉树节点需要做什么，到底用什么遍历顺序就清楚了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"寻找重复子树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#寻找重复子树"}},[this._v("#")]),this._v(" 寻找重复子树")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2Fc5d33bdd4bd5783da315516419c6fa4d5f64566b.png?alt=media",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F4d33f1815464502d0e8f7f4000ae3de3412c9081.png?alt=media",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2F943e3fe721bf1ba78edb92a5a4e305a9c5e29c4f.png?alt=media",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2Ffb81126be53ad2689e192e8c468d1d1f30def845.png?alt=media",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这种题目该怎么做呢？ "),s("strong",[this._v("还是老套路，先思考，对于某个节点，它应该做什么。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://gblobscdn.gitbook.com/assets%2F-LrtQOWSnDdXhp3kYN4k%2Fsync%2Fc95eb23a404a38260a4aa8c37f089fd1e4d6cdba.png?alt=media",alt:"img"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("你需要知道以下两点：")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[this._v("以我为根的这棵二叉树（子树）长啥样？")])]),this._v(" "),s("li",[s("strong",[this._v("以其他节点为根的子树都长啥样")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"以我为根的二叉树长啥样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以我为根的二叉树长啥样"}},[this._v("#")]),this._v(" 以我为根的二叉树长啥样")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解法代码位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对于空节点，我们可以用一个特殊的字符串来表示")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将左右子树序列化成字符串")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后序遍历代码位置")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左右子树加上自己就是以自己为根的二叉树序列化结果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subTree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" subTree\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"以其他节点为根的二叉树长啥样"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以其他节点为根的二叉树长啥样"}},[this._v("#")]),this._v(" 以其他节点为根的二叉树长啥样")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findDuplicateSubtrees")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TreeNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#'")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" subTree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" memo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    memo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subTree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" subTree\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("traverse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);