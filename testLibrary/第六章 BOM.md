# 1. 下面有关 javascript 内部对象的描述，正确的有？ 

A.History 对象包含用户（在浏览器窗口中）访问过的 URL 

B.Location 对象包含有关当前 URL 的信息 

C.Window 对象表示浏览器中打开的窗口 

D.Navigator 对象包含有关浏览器的信息 

# 2. javascript 的本地对象，内置对象和宿主对象。 

提示： 

本地对象为 array obj regexp 等可以 new 实例化。 

内置对象为 Math JSON等不可以实例化的。 

宿主为浏览器自带的 document,window 等

# 3. JS中的宿主对象与原生对象有何不同？

宿主对象:这些是运行环境提供的对象。这意味着它们在不同的环境下是不同的。例如，浏览器包含像window这样的对象，但是Node.js环境提供像Node List这样的对象。

原生对象:这些是JS中的内置对象。它们也被称为全局对象，因为如果使用JS，内置对象不受是运行环境影响。

# 4. 列举浏览器对象模型 BOM 里常用的至少 4 个对象，并列举 window 对象的常用方法至少 5 个。 

# 5. 解析一个完整的 url，返回 Object 包含域与 window.location 相同 

参考： 

```js


/** 

* 解析一个 url 并生成 window.location 对象中包含的域 

* location: 

* { 

* href: '包含完整的 url', 

* origin: '包含协议到 pathname 之前的内容', 

* protocol: 'url 使用的协议，包含末尾的:', 

* username: '用户名', // 暂时不支持 

* password: '密码', // 暂时不支持 

* host: '完整主机名，包含:和端口', 

* hostname: '主机名，不包含端口' 

* port: '端口号', 

* pathname: '服务器上访问资源的路径/开头', 

* search: 'query string，?开头', 

* hash: '#开头的 fragment identifier' 

* } 

\*  

\* @param {string} url 需要解析的 url 

\* @return {Object} 包含 url 信息的对象 

*/  

function parseUrl(url) { 

   var result = {}; 

   var keys = ['href', 'origin', 'protocol', 'host',  'hostname', 'port', 'pathname', 'search', 'hash']; 

   var i, len; 

   var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/; 

   var match = regexp.exec(url); 

   if (match) { 

     for (i = keys.length - 1; i >= 0; --i) {
         result[keys[i]] = match[i] ? match[i] : ''; 
     } 
   } 

   return result; 

}
```

# 6. 什么是 Window 对象? 什么是 Document 对象?

- Window 对象表示当前浏览器的窗口，是JavaScript的顶级对象。
- 我们创建的所有对象、函数、变量都是 Window 对象的成员。
- Window 对象的方法和属性是在全局范围内有效的。
- Document 对象是 HTML 文档的根节点与所有其他节点（元素节点，文本节点，属性节点, 注释节点）
- Document 对象使我们可以通过脚本对 HTML 页面中的所有元素进行访问
- Document 对象是 Window 对象的一部分，可通过 window.document 属性对其进行访问

# 7. **如何获取UA?**

```js
`function` `whatBrowser() { ``     ``document.Browser.Name.value=navigator.appName; ``     ``document.Browser.Version.value=navigator.appVersion; ``     ``document.Browser.Code.value=navigator.appCodeName; ``     ``document.Browser.Agent.value=navigator.userAgent; `` ``}`
```

# 8. BOM 和 DOM 的关系

BOM全称Browser Object Model，即浏览器对象模型，主要处理浏览器窗口和框架。

DOM全称Document Object Model，即文档对象模型，是 HTML 和XML 的应用程序接口（API），遵循W3C 的标准，所有浏览器公共遵守的标准。

JS是通过访问BOM（Browser Object Model）对象来访问、控制、修改客户端(浏览器)，由于BOM的window包含了document，window对象的属性和方法是直接可以使用而且被感知的，因此可以直接使用window对象的document属性，通过document属性就可以访问、检索、修改XHTML文档内容与结构。因为document对象又是DOM的根节点。

可以说，BOM包含了DOM(对象)，浏览器提供出来给予访问的是BOM对象，从BOM对象再访问到DOM对象，从而js可以操作浏览器以及浏览器读取到的文档。

# 9.**下面代码的输出是什么?**

```js
`for` `(``var` `i = 0; i < 3; i++) {`` ``setTimeout(() => console.log(i), 1);``}` `for` `(let i = 0; i < 3; i++) {`` ``setTimeout(() => console.log(i), 1);``}`
```

A: 0 1 2 and 0 1 2

B: 0 1 2 and 3 3 3

C: 3 3 3 and 0 1 2