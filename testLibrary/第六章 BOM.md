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

# 3. 列举浏览器对象模型 BOM 里常用的至少 4 个对象，并列举 window 对象的常用方法至少 5 个。 

# 4. 解析一个完整的 url，返回 Object 包含域与 window.location 相同 

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

