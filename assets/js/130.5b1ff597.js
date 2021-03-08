(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{312:function(t,a,s){"use strict";s.r(a);var v=s(0),_=Object(v.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"http-为什么不安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-为什么不安全"}},[t._v("#")]),t._v(" HTTP 为什么不安全")]),t._v(" "),s("p",[t._v("探究 HTTPS 安全之前，我们应该先探究 HTTP 为什么不安全。")]),t._v(" "),s("p",[t._v("首先得了解计算机网络相关的知识，面试经常会被问到的 TCP/IP 三次握手之类的知识。从《计算机网络》中我们得知网络中的数据是以包的形式在网络模型各层之间传递的，HTTP 协议位于应用层，TCP/IP 协议的上层，而数据报文在这些层之间都是没有加密的明文，这就导致了一下的问题：")]),t._v(" "),s("h2",{attrs:{id:"通信是采用明文（不加密），内容可能被窃听"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通信是采用明文（不加密），内容可能被窃听"}},[t._v("#")]),t._v(" 通信是采用明文（不加密），内容可能被窃听")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f07e2604e10b4e?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("从图中我们可以看出，我们作为客户端处于庞大互联网中的一个节点，而在通信时，中间会经历很多个阶段，而每个阶段报文内容都有可能会被窃听。")]),t._v(" "),s("h2",{attrs:{id:"无法验证接受报文的完整性，可能已被篡改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无法验证接受报文的完整性，可能已被篡改"}},[t._v("#")]),t._v(" 无法验证接受报文的完整性，可能已被篡改")]),t._v(" "),s("p",[t._v("无法验证完整性，即意味着接收到的报文可能是缺失的，也意味着接收到的报文可能是错误的，也就是不是我们想要的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08654bb1557a8?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("作为客户端向服务端请求数据，服务器响应的是 A 内容，客户端接收到的是 B 内容，但是客户端并不知道 A 和 B 是否相同，因为传输过程中报文可能被篡改了，这个过程工厂被称为“中间人攻击”。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f086a119925aba?imageslim",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"http-协议不验证通信方身份，因此可能被伪装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-协议不验证通信方身份，因此可能被伪装"}},[t._v("#")]),t._v(" HTTP 协议不验证通信方身份，因此可能被伪装")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f07e5ec826aa0d?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("HTTP 协议设计的十分简单，并且不验证通信双方，也就意味着，不论是谁发送的请求，只要合法（后台没有限制访问 ip 和端口号），服务器都会接受，而不确认通信方身份可能会导致以下的问题：")]),t._v(" "),s("ul",[s("li",[t._v("无法确定请求发送至目标 Web 服务器是否按照真实意图返回响应的那台服务器，有可能是已经伪装的 Web 服务器")]),t._v(" "),s("li",[t._v("无法确定响应返回到的客户端是否是按照真实意图接收响应的客户端，有可能是已伪装的客户端")]),t._v(" "),s("li",[t._v("无法确定正在通信的对方是否具有访问权限，因为某些 Web 服务器上保存着重要信息，只想发给特定用户通信的权限")]),t._v(" "),s("li",[t._v("无法判断请求是来自何方，出自谁手")]),t._v(" "),s("li",[t._v("即是无意义的请求也照单全收，无法阻止海量请求下的 DoS 攻击（Denial of Service），也就容易遭受攻击")])]),t._v(" "),s("h1",{attrs:{id:"https-实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-实现原理"}},[t._v("#")]),t._v(" HTTPS 实现原理")]),t._v(" "),s("p",[t._v("由于 HTTP 这么不安全，所以为了解决上述的问题，HTTPS 应运而生。目前大部分的网站都已经过渡到了 HTTPS。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08927cdda0145?imageslim",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f089344bb0995b?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("上面是我偶然发现的，没记住掘金域名，想用掘金举例子，结果用"),s("code",[t._v(".com")]),t._v("搜出来的并不是掘金，而恰巧它还是"),s("code",[t._v("http")]),t._v("协议的，可以看到，现在的浏览器，如果是 HTTP 协议的，就很明目的提示我们此网站是不安全的，因此我们在输入一些表单私人信息的时候就需要注意了。而第二个图则是掘金的，很明显旁边有个小锁头，看起来就很稳妥有安全感～")]),t._v(" "),s("p",[t._v("出上面两种外，其实还有其他状态比如HTTPS域名下引用了部分 HTTP 内容，那么就会是另一种状态，如下图所示：（一来说，如果是公司项目，最好将网络的图片和 js 脚本放到自己的域名下）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08a75a4d1be3c?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("HTTPS 本质也是基于 HTTP 协议的，不过通过一些安全手段来解决上面 HTTP 存在的问题。它的通用接口部分使用 SSL(Secure Socket Layer) 和 TLS(Transport Layer Security) 协议代替。以前来说，HTTP 协议是应用层协议，直接和下层 TCP 进行通信，而增加了 SSL 协议之后，就变成了 HTTP 先跟 SSL 通信再由 SSL 跟 TCP 通信，也就是说HTTPS是披着 SSL 协议外壳的 HTTP 协议。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08a1dca5dec97?imageslim",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("SSL 是独立于 HTTP 的协议，所以不光是 HTTP 协议，其他运行在应用层的 SMTP 和 Telnet 等协议均可配合 SSP 协议使用。可以说 SSL 是当今世界上应用最为广泛的网络安全技术。")])]),t._v(" "),s("blockquote",[s("p",[t._v("简单来说 HTTPS = HTTP + 加密 + 证书 + 完整性保护")])]),t._v(" "),s("h2",{attrs:{id:"加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加密"}},[t._v("#")]),t._v(" 加密")]),t._v(" "),s("p",[t._v("HTTPS 采用混合加密机制，也就是对称加密与非对称加密混用来实现加密机制")]),t._v(" "),s("h3",{attrs:{id:"数据传输阶段（对称密钥加密）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据传输阶段（对称密钥加密）"}},[t._v("#")]),t._v(" 数据传输阶段（对称密钥加密）")]),t._v(" "),s("p",[t._v("对称密钥加密又称为共享密钥加密（Common key crypto system），是在加密和解密阶段使用同一个密钥的方式。也就是说，通信双方必须储存同一份密钥，也就是说只要攻击者拿到了密钥，就可以发起攻击。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08b87f8557de7?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("因此，加密的重中之重就是 "),s("strong",[t._v("如何安全地发送密钥并不泄漏")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"证书交换验证阶段（非对称加密）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书交换验证阶段（非对称加密）"}},[t._v("#")]),t._v(" 证书交换验证阶段（非对称加密）")]),t._v(" "),s("p",[t._v("公开密钥加密（Public-key cryptography）解决了上述的发送密钥问题。它采用一对非对称的密钥，一把公钥一把私钥。加密过程就是，发送加密报文的一方是用对方的公开密钥进行加密，接收方式用自己本地的私钥进行解密，也就是说发送方并不需要附带着发送用来解密的密钥，这种方式就不需要考虑密钥在传输过程中被攻击这获取到。")]),t._v(" "),s("p",[t._v("私钥和公钥是一对多的关系，公钥可以随意转发，只要采用公钥加密的报文，都只能使用对应私钥进行解密。")]),t._v(" "),s("h3",{attrs:{id:"混合验证机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#混合验证机制"}},[t._v("#")]),t._v(" 混合验证机制")]),t._v(" "),s("p",[t._v("HTTPS 采用的是混合加密。")]),t._v(" "),s("p",[t._v("原因是，非对称加密相比对称加密更加复杂，效率更低，在前端业务中一般都是存在大量的 HTTP 请求，所以非对称加密的低效是无法被接受的。此外，非对称加密的场景只在服务端保存私钥，也就是说一对公私钥只能单向传输数据，因此可以用来确认通信安全以及服务端返回证书。确认安全之后，传输数据采用的就是速度更快的对称加密。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08cc9aec82787?imageslim",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书"}},[t._v("#")]),t._v(" 证书")]),t._v(" "),s("p",[t._v("上面的过程也存在一个问题，安全的本质是使用密钥进行加密。但是如果密钥本身就有问题，那么安全也就无从谈起，因此这个密钥必须是通信双方认可的。这个工作不能交给客户端做，也不能服务端做，一半交给第三方权威机构 -- 数字证书认证机构（CA，Certificate Authority）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08db35c34a23d?imageslim",alt:""}})]),t._v(" "),s("p",[t._v("认证机关的公开密钥必须安全地转交给客户端，使用通信方式是，如何安全转交是一件很困难的事，因此多数浏览器发布版本时，都会是现在内部置入常用认证机关的公钥。")]),t._v(" "),s("h2",{attrs:{id:"数据完整性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据完整性"}},[t._v("#")]),t._v(" 数据完整性")]),t._v(" "),s("p",[t._v("确保数据完整性，也就意味着数据安全没有被第三方篡改，这时候就需要通过 "),s("strong",[t._v("数字签名")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"数字签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数字签名"}},[t._v("#")]),t._v(" 数字签名")]),t._v(" "),s("p",[t._v("数字签名是一段由发送者生成的特殊加密校验码，用于传输过程中确认报文的完整性。数字签名涉及到了两种技术："),s("strong",[t._v("非对称加密")]),t._v(" 和 "),s("strong",[t._v("数字摘要")]),t._v("。生成数字摘要的算法通过 "),s("strong",[t._v("MD5")]),t._v(" 和 "),s("strong",[t._v("SHA")]),t._v(" 这种不可逆算法，将不定长的报文内容提取出定长的数字摘要。")]),t._v(" "),s("p",[t._v("数字签名的整个签名和校验过程分为五步：")]),t._v(" "),s("ol",[s("li",[t._v("发送方用摘要算法对报文提取生成数字摘要")]),t._v(" "),s("li",[t._v("使用私钥对摘要进行加密，加密后的摘要作为数字签名附加在报文上一起发送给接收方")]),t._v(" "),s("li",[t._v("接收方收到报文后，使用相同的摘要算法提取出摘要")]),t._v(" "),s("li",[t._v("在使用公钥对报文的数字签名进行解密")]),t._v(" "),s("li",[t._v("如果解密后的数字签名与提取出的摘要相同，那么说明报文没有被篡改，数据是完整的")])]),t._v(" "),s("blockquote",[s("p",[t._v("多说一句，对于本地存储，无论是服务端的私钥还是客户端的随机数，都不是 HTTPS 通信过程的安全考虑，HTTPS 只保证在网络传输过程的数据安全性，本地的内容安全不被窃取依靠的是防火墙，杀毒软件等等。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08fb863b6c152?imageslim",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"完整流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整流程"}},[t._v("#")]),t._v(" 完整流程")]),t._v(" "),s("h3",{attrs:{id:"证书验证阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#证书验证阶段"}},[t._v("#")]),t._v(" 证书验证阶段")]),t._v(" "),s("ol",[s("li",[t._v("客户端发起 HTTPS 请求")]),t._v(" "),s("li",[t._v("服务端返回 HTTPS 证书")]),t._v(" "),s("li",[t._v("客户端验证证书是否合法，不合法则提示警告")])]),t._v(" "),s("h3",{attrs:{id:"数据传输阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据传输阶段"}},[t._v("#")]),t._v(" 数据传输阶段")]),t._v(" "),s("ol",[s("li",[t._v("当证书验证合法后，在本地生成随机密码串")]),t._v(" "),s("li",[t._v("通过公钥加密随机密码串，并把加密后的随机密码串传输到服务端")]),t._v(" "),s("li",[t._v("服务端通过私钥对随机密码串进行解密")]),t._v(" "),s("li",[t._v("服务端通过客户端传入的随机密码串构建对称加密算法，对返回的结果内容进行加密后传输")])]),t._v(" "),s("h1",{attrs:{id:"https-并不全是优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-并不全是优点"}},[t._v("#")]),t._v(" HTTPS 并不全是优点")]),t._v(" "),s("h2",{attrs:{id:"速度慢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#速度慢"}},[t._v("#")]),t._v(" 速度慢")]),t._v(" "),s("p",[t._v("HTTPS 速度会相比 HTTP 慢 2～100 倍")]),t._v(" "),s("p",[t._v("HTTPS 慢其实是慢在 SSL 协议通信商上，因为 SSL 协议要进行加密解密处理，会占用 CPU 和网络资源，总体会慢一些")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/15/16f08fe8e4ef0869?imageslim",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"ca-证书一般不免费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ca-证书一般不免费"}},[t._v("#")]),t._v(" CA 证书一般不免费")]),t._v(" "),s("p",[t._v("申请 CA 证书是需要花钱的，当然有很多手段可以申请免费的 HTTPS 证书，但是大部分权威机构还是需要收费的。所以对于大部分小型开发者来说，使用 HTTP 协议更划算。")]),t._v(" "),s("h1",{attrs:{id:"相关题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关题目"}},[t._v("#")]),t._v(" 相关题目")]),t._v(" "),s("h2",{attrs:{id:"为什么-http-不安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-http-不安全"}},[t._v("#")]),t._v(" 为什么 HTTP 不安全")]),t._v(" "),s("ol",[s("li",[t._v("报文是明文的，没有加密")]),t._v(" "),s("li",[t._v("无法验证报文的完整性，传输过程中可能会被篡改")]),t._v(" "),s("li",[t._v("不验证通信双方的身份，可能会被伪装")])]),t._v(" "),s("h2",{attrs:{id:"为什么-https-是安全的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么-https-是安全的"}},[t._v("#")]),t._v(" 为什么 HTTPS 是安全的")]),t._v(" "),s("p",[t._v("HTTPS = HTTP + 加密 + 证书 + 完整性保护。")]),t._v(" "),s("p",[t._v("相关安全操作是通过 SSL 协议来进行实现的。")]),t._v(" "),s("h2",{attrs:{id:"https-绝对安全吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-绝对安全吗"}},[t._v("#")]),t._v(" HTTPS 绝对安全吗")]),t._v(" "),s("p",[t._v("并不是，HTTPS 也会被抓包，只不过内容被加密过。不过用户可以主动对证书进行授权，如果用户授权通过，那么代理软件是可以对传输内容进行解密的。")])])}],!1,null,null,null);a.default=_.exports}}]);