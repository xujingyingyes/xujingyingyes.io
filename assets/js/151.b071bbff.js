(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{333:function(a,v,e){"use strict";e.r(v);var _=e(0),t=Object(_.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,v=a.$createElement,e=a._self._c||v;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),e("p",[a._v("很多时候面试官不会精确问你某个知识点，而是抛出一个有指向性但是又可以很发散的问题，比如：")]),a._v(" "),e("p",[a._v("“嗯... 那你说说浏览器的缓存吧“")]),a._v(" "),e("p",[a._v("这时候考验的就是你对浏览器知识的广度和深度。")]),a._v(" "),e("p",[a._v("当接到这样一个问题的时候，你得冷静思考有几个方面可以回答，各个大方面又可以从哪几个小方面说。")]),a._v(" "),e("h1",{attrs:{id:"知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[a._v("#")]),a._v(" 知识点")]),a._v(" "),e("p",[a._v("浏览器缓存这一块可以精确地回答一下几个大方面：")]),a._v(" "),e("ul",[e("li",[a._v("缓存的类型（强缓存 or 协商缓存）")]),a._v(" "),e("li",[a._v("缓存位置（Service Worker、Memory Cache...）")]),a._v(" "),e("li",[a._v("缓存过程分析")]),a._v(" "),e("li",[a._v("缓存策略的实际场景应用")])]),a._v(" "),e("h1",{attrs:{id:"缓存的类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存的类型"}},[a._v("#")]),a._v(" 缓存的类型")]),a._v(" "),e("p",[a._v("首先从缓存的类型上说，缓存分为 "),e("strong",[a._v("强缓存")]),a._v(" 和 "),e("strong",[a._v("协商缓存")])]),a._v(" "),e("p",[a._v("强缓存是 "),e("strong",[a._v("不需要发送 HTTP 请求的")]),a._v("，而协商缓存需要。")]),a._v(" "),e("p",[a._v("也就是说，在发送 HTTP 请求之前，浏览器会先检查一下强缓存，如果命中直接使用，否则就进入下一步。")]),a._v(" "),e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("p",[a._v("浏览器检查强缓存的方式主要有两个字段：")]),a._v(" "),e("ul",[e("li",[a._v("HTTP/1.0 时期使用 Expires")]),a._v(" "),e("li",[a._v("HTTP/1.1 时期使用 Cache-Control")])]),a._v(" "),e("h3",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),e("p",[a._v("Expires 字面意思是有效期，所以它表示的是一个具体的时间，例如：")]),a._v(" "),e("div",{staticClass:"language-wiki extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wiki"}},[e("code",[a._v("Expires: Wed, Nov 11 2020 08:00:00 GMT\n")])])]),e("p",[a._v("表示的是这个资源将在 2020年11月11日 8 点过期，过期就得重新向服务端发送请求。")]),a._v(" "),e("p",[a._v("很有意思的是，通常情况下服务端的时间与客户端的时间其实是并不一致的，那么如果设置了 Expires 字段就很有可能造成缓存失效，因此这种方式并不准确，所以在 HTTP/1.1 被摒弃了。")]),a._v(" "),e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),e("p",[a._v("摒弃了 Expires 之后，HTTP/1.1 采用了 Cache-Control 这个重要规则，它设置了一个具体的过期时长，其中的一个属性是 max-age。")]),a._v(" "),e("div",{staticClass:"language-wiki extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wiki"}},[e("code",[a._v("Cache-Control: max-age=300\n")])])]),e("p",[a._v("这表示当前资源会在 300s 后过期。")]),a._v(" "),e("p",[a._v("Cache-Control 不仅仅含有一个 max-age 的属性，他还有很多用法， 甚至还可以采用组合的方式：")]),a._v(" "),e("div",{staticClass:"language-wiki extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wiki"}},[e("code",[a._v("Cache-Control: public, max-age=300\n")])])]),e("p",[a._v("下面列举一些常用指令：")]),a._v(" "),e("ul",[e("li",[a._v("public：客户端和代理服务器都可以缓存，响应可以被中间任何一个节点缓存")]),a._v(" "),e("li",[a._v("private：这个是 Cache-Control 的默认取值，只有客户端可以缓存，中间节点不允许缓存")]),a._v(" "),e("li",[a._v("no-cache：表示不进行强缓存验证，而是用协商缓存来验证")]),a._v(" "),e("li",[a._v("no-store：所有内容都不会被缓存，既不使用强缓存，也不使用协商缓存")]),a._v(" "),e("li",[a._v("max-age：表示多久时间之后过期")]),a._v(" "),e("li",[a._v("s-max-age：作用同 max-age，但是表示代理缓存，且优先级更高")]),a._v(" "),e("li",[a._v("max-stale：能容忍的最大过期时间")]),a._v(" "),e("li",[a._v("min-fresh：能容忍的最小新鲜度")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/26/16fe1b1e662ad180?imageslim",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[a._v("#")]),a._v(" 对比")]),a._v(" "),e("ul",[e("li",[a._v("Expires 产于 HTTP/1.0，而 Cache-Control 产于 HTTP/1.1")]),a._v(" "),e("li",[a._v("Expires 设置的是一个具体的时间，Cache-Control 可以设置除时间以外的其他属性")]),a._v(" "),e("li",[a._v("两者同时存在时，Cache-Control 优先级更高")]),a._v(" "),e("li",[a._v("在不支持 HTTP/1.1 的环境下，Expires 就会发挥作用，所以现阶段的存在是为了做一些兼容处理")])]),a._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),e("p",[a._v("上面我们介绍了强缓存，如果强缓存失效，则会进入协商缓存。")]),a._v(" "),e("p",[a._v("协商缓存概括起来就是浏览器会携带缓存标识（tag）向服务端发送请求，服务端会根据缓存标识（tag）来决定是否使用缓存。")]),a._v(" "),e("p",[a._v("所以对于服务器来说，返回的结果会有两种：")]),a._v(" "),e("ul",[e("li",[a._v("协商缓存生效，返回 304 状态码和 Not Modified（空的响应体）")]),a._v(" "),e("li",[a._v("协商缓存失效，返回 200 和请求结果")])]),a._v(" "),e("p",[a._v("协商缓存分为 Last-Modified 和 ETag 两个字段控制。")]),a._v(" "),e("h3",{attrs:{id:"last-modified-和-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified 和 If-Modified-Since")]),a._v(" "),e("p",[a._v("从字面意思上我们可以看出，Last-Modified 表示的是资源最后的修改时间，它的实现方式是：")]),a._v(" "),e("ol",[e("li",[a._v("浏览器第一次向服务器请求该资源")]),a._v(" "),e("li",[a._v("服务器在返回这个资源的同时，会在响应头中添加 Last-Modified 的字段，值为最后的修改时间")]),a._v(" "),e("li",[a._v("当浏览器接收后缓存文件和这个 header")]),a._v(" "),e("li",[a._v("当下一次浏览器再次发送请求请求该资源的时候，检测到有 Last-Modified 这个 header，就会在请求头中添加 If-Modified-Since 这个字段，值为 Last-Modified")]),a._v(" "),e("li",[a._v("服务器接收到请求之后，根据 If-Modified-Since 与服务器的这一资源的最后修改时间做对比")]),a._v(" "),e("li",[a._v("如果结果相同，则返回 304 状态码和一个空的响应题，告诉浏览器使用缓存")]),a._v(" "),e("li",[a._v("反之，返回 200 状态码和请求的资源，同时在响应头中更新 Last-Modified")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/26/16fe1b22089caa27?imageslim",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"etag-和-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match"}},[a._v("#")]),a._v(" ETag 和 If-None-Match")]),a._v(" "),e("p",[a._v("Etag 的原理其实和 Last-Modified 相似，但是它是根据一个唯一标识来进行判断。")]),a._v(" "),e("p",[a._v("当浏览器请求服务器资源的时候，服务器会根据当前文件的内容，给文件生成一个唯一的标识，若是文件发生修改，则标识也会修改。")]),a._v(" "),e("p",[a._v("服务器在响应请求的时候，会在响应头添加一个 ETag 的字段，值为这个文件当前的唯一标识。")]),a._v(" "),e("p",[a._v("浏览器在接收到文件并缓存文件和 请求的响应头。")]),a._v(" "),e("p",[a._v("在下一次请求这个资源的时候，浏览器会在请求头上加一个 If-None-Match 的字段，值为 ETag。")]),a._v(" "),e("p",[a._v("服务器用请求头上的值和本地资源的值进行对比，如果命中则返回 304 告知浏览器使用本地缓存，否则返回 200 和最新的资源文件。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/26/16fe1b2570cc9d41?imageslim",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"两者对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两者对比"}},[a._v("#")]),a._v(" 两者对比")]),a._v(" "),e("p",[a._v("首先对于 Last-Modified：")]),a._v(" "),e("ul",[e("li",[a._v("若是本地打开了缓存文件，并且并没有修改文件，也还是会改变最后的修改时间，导致缓存失败；")]),a._v(" "),e("li",[a._v("由于 Last-Modified 是以秒作为计时单位，若是某个文件的改动是在秒级以内的话，那么这之后就无法被记录导致缓存命中错误。")])]),a._v(" "),e("p",[a._v("对于 ETag：")]),a._v(" "),e("ul",[e("li",[a._v("性能上会比 Last-Modified 差，因为只要文件发生修改，就会重新生成一个新的 hash 值。")])]),a._v(" "),e("p",[a._v("综上：")]),a._v(" "),e("ul",[e("li",[a._v("准确度上，ETag 要高于 Last-Modified")]),a._v(" "),e("li",[a._v("性能上 Last-Modified 更好")]),a._v(" "),e("li",[a._v("两者都支持的话，ETag 优先级更高")])]),a._v(" "),e("h1",{attrs:{id:"缓存位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[a._v("#")]),a._v(" 缓存位置")]),a._v(" "),e("p",[a._v("在上面👆我们已经介绍完了缓存的类型😄, 但是之前也提到过了, 若是命中了 "),e("strong",[a._v("强缓存")]),a._v(" 或者服务器返回了 "),e("code",[a._v("304")]),a._v(" 之后, 要浏览器从缓存中过去资源, 那这些缓存具体是存储在哪里呢?")]),a._v(" "),e("p",[a._v("从优先级上说，缓存位置分为以下四种：")]),a._v(" "),e("ul",[e("li",[a._v("Service Worker")]),a._v(" "),e("li",[a._v("Memory Cache")]),a._v(" "),e("li",[a._v("Disk Cache")]),a._v(" "),e("li",[a._v("Push Cache")])]),a._v(" "),e("h2",{attrs:{id:"service-worker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[a._v("#")]),a._v(" Service Worker")]),a._v(" "),e("p",[a._v("Service Worker 是运行在浏览器背后的独立线程，也就是说他脱离了浏览器的窗体，无法直接访问 DOM。功能上主要能实现：离线缓存、消息推送、网络代理等。比如离线缓存就是 "),e("strong",[a._v("Service Worker Cache")]),a._v("。")]),a._v(" "),e("p",[a._v("简单来说，它有以下几个特点：")]),a._v(" "),e("ul",[e("li",[a._v("借鉴了 Web Worker")]),a._v(" "),e("li",[a._v("使用 Service Worker 会涉及请求拦截，所以需要用 HTTPS 协议来保证安全，传输协议必须是 HTTPS")]),a._v(" "),e("li",[a._v("与浏览器其他内建的缓存机制不同，它可以让我们自由的控制缓存那些文件、如何匹配读取缓存，且缓存是持续性的")]),a._v(" "),e("li",[a._v("Service Worker 同时也是 PWA 的重要实现机制")])]),a._v(" "),e("h2",{attrs:{id:"memory-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[a._v("#")]),a._v(" Memory Cache")]),a._v(" "),e("p",[a._v("内存缓存，存储的主要是当前网页上已经抓取到的资源，比如网页上已经下载的样式、脚本、图片等。")]),a._v(" "),e("p",[a._v("Memory Cache 的特点是：")]),a._v(" "),e("ul",[e("li",[a._v("读取效率高，但是持续时间短，会随着进程的释放而释放（一旦关闭 Tab 页面就会被释放，甚至有时候没关闭前，排在前面的缓存就已经失效了）")]),a._v(" "),e("li",[a._v("几乎所有的请求资源都能进入 memory cache，细分来说主要分为 "),e("strong",[a._v("preloader")]),a._v(" 和 "),e("strong",[a._v("preload")]),a._v(" 这两块")]),a._v(" "),e("li",[a._v("在从 memory cache 读取缓存时，浏览器会忽视 Cache-Control 中的一些 max-age、no-cache 等头部设置，除非设置了 no-store 这个头部设置")])]),a._v(" "),e("h3",{attrs:{id:"preloader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preloader"}},[a._v("#")]),a._v(" preloader")]),a._v(" "),e("p",[a._v("上面提到的 preloader 是页面优化的常见手段之一，它的主要作用是 "),e("strong",[a._v("在浏览器打开一个网页的时候，能够一边解析执行 js/css，一边去请求下一个资源")]),a._v("，而这些被 preloader 请求来的资源就会被放入 memory cache 中，供之后的解析执行操作使用。")]),a._v(" "),e("h3",{attrs:{id:"preload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preload"}},[a._v("#")]),a._v(" preload")]),a._v(" "),e("p",[a._v("preload 和 preloader 长得非常相似，它能够显式指定预加载的资源，这些资源也会被放进 memory cache 中，例如")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("link")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("rel")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("preload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("h2",{attrs:{id:"disk-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[a._v("#")]),a._v(" Disk Cache")]),a._v(" "),e("p",[a._v("Disk Cache，也叫 HTTP Cache，是存储在硬盘中的缓存，所以它的特点是持续时间长，是实际存在于文件系统中的缓存。")]),a._v(" "),e("p",[a._v("从存储效率上说，它比内存缓存慢，但是优势在于存储容量大，持续时间更长。")]),a._v(" "),e("p",[a._v("在所有浏览器缓存中，Disk Cache 是覆盖面最大的，它会根据前面我们提到的 HTTP header 中的缓存字段来判断哪些资源需要缓存，哪些资源不需要请求而直接使用，哪些已经过期了需要重新请求获取。")]),a._v(" "),e("p",[a._v("若是命中缓存之后，浏览器会从硬盘中直接读取资源，虽然没有从内存中读取快，但是仍然比网络下载快。")]),a._v(" "),e("p",[a._v("前面提到的强缓存和协商缓存也是属于 Disk Cache，他们最终都存储在硬盘里。")]),a._v(" "),e("p",[a._v("Disk Cache 和 Memory Cache 之间的对比：")]),a._v(" "),e("ul",[e("li",[a._v("比较大的 JS、CSS 文件会被丢在硬盘中存储，反之则存储在内存中")]),a._v(" "),e("li",[a._v("当前系统内存使用率比较高的时候，文件优先进入磁盘")])]),a._v(" "),e("h2",{attrs:{id:"push-cache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[a._v("#")]),a._v(" Push Cache")]),a._v(" "),e("p",[a._v("Push Cache（推送缓存），它是浏览器缓存的最后一道防线，当以上三种缓存都没有命中的时候，它才会被使用。")]),a._v(" "),e("p",[a._v("它只会在会话（Session）中存在，一旦会话结束就会被释放，并且缓存时间非常短，在 Chrome 浏览器中只有 5 分钟。")]),a._v(" "),e("p",[a._v("另外由于它是 HTTP/2 的产物，所以国内普及程度不高，这里贴上一个总结：")]),a._v(" "),e("ul",[e("li",[a._v("所有资源都能被推送，并且能够被缓存，但是 Edge 和 Safari 支持相对比较差")]),a._v(" "),e("li",[a._v("可以推送 no-cache 和 no-store 的资源")]),a._v(" "),e("li",[a._v("一旦连接被关闭，Push Cache 就会被释放")]),a._v(" "),e("li",[a._v("多个页面可以使用同一个 HTTP/2 的连接，也就可以使用同一个 Push Cache。这主要还是依赖浏览器的实现，出于对性能的考虑，有些浏览器会对相同域名但不同 tab 标签使用同一个 HTTP 请求")]),a._v(" "),e("li",[a._v("Push Cache 中的缓存只能被使用一次")]),a._v(" "),e("li",[a._v("浏览器可以拒绝接受已经存在的资源推送")]),a._v(" "),e("li",[a._v("你可以给其他域名推送资源")])]),a._v(" "),e("h1",{attrs:{id:"缓存过程分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存过程分析"}},[a._v("#")]),a._v(" 缓存过程分析")]),a._v(" "),e("p",[a._v("上面已经介绍了缓存类型和缓存位置，那么浏览器是如何处理缓存？")]),a._v(" "),e("p",[a._v("从浏览器发起 HTTP 请求到获得请求结果，可以分为以下几个步骤：")]),a._v(" "),e("ol",[e("li",[a._v("浏览器第一次发起 HTTP 请求，在浏览器缓存中没有发现缓存结果和缓存标识")]),a._v(" "),e("li",[a._v("因此向服务器发起 HTTP 请求，获得该请求的结果以及缓存规则（也就是 Last-Modified 或者是 ETag）")]),a._v(" "),e("li",[a._v("浏览器把响应内容存入 Disk Cache，把响应内容的引用存入 Memory Cache")]),a._v(" "),e("li",[a._v("把响应内容存入 Service Worker 的 Cache Storage（如果 Service Worker 的脚本调用了 cache.put()）")])]),a._v(" "),e("p",[a._v("下一次请求相同资源的时候：")]),a._v(" "),e("ol",[e("li",[a._v("调用 Service Worker 的 fetch 事件响应")]),a._v(" "),e("li",[a._v("查看 memory cache")]),a._v(" "),e("li",[a._v("查看 disk cache，这里细分为：\n"),e("ul",[e("li",[a._v("有强缓存且未失效，则是用强缓存，不请求服务器，返回的状态码都是 200")]),a._v(" "),e("li",[a._v("有强缓存且已失效，使用协商缓存判断，是返回 304 或者是 200")])])])]),a._v(" "),e("h1",{attrs:{id:"缓存策略的实际使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略的实际使用场景"}},[a._v("#")]),a._v(" 缓存策略的实际使用场景")]),a._v(" "),e("h2",{attrs:{id:"不常变化的资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不常变化的资源"}},[a._v("#")]),a._v(" 不常变化的资源")]),a._v(" "),e("p",[a._v("对于不常变化的资源：")]),a._v(" "),e("div",{staticClass:"language-wiki extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wiki"}},[e("code",[a._v("Cache-Control: max-age=31536000\n")])])]),e("p",[a._v("通常给 Cache-Control 设置一个很大的值（比如一年），但是有时候为了解决更新问题，我们需要在文件上添加一个 hash，这样就达到了更改引用 URL 的目的。")]),a._v(" "),e("h2",{attrs:{id:"常变化的资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常变化的资源"}},[a._v("#")]),a._v(" 常变化的资源")]),a._v(" "),e("p",[a._v("对于经常变化的资源：")]),a._v(" "),e("div",{staticClass:"language-wiki extra-class"},[e("pre",{pre:!0,attrs:{class:"language-wiki"}},[e("code",[a._v("Cache-Control: no-cache\n")])])]),e("p",[a._v("我们可以不使用强缓存，每次都向浏览器发送请求，然后配合 ETag 或者 Last-Modified 来验证资源缓存是否有效。")])])}],!1,null,null,null);v.default=t.exports}}]);