## 1. 事件委托 

> 事件委托利用了事件冒泡，只指定一个事件处理程序，就可以管理某一类型的所有事件。所有循环绑定的事件（多数鼠标事件和键盘事件）都适合采用事件委托技术， 使用事件委托可以节省内存。

```javascript
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>凤梨</li>
</ul>

// good
document.querySelector('ul').onclick = (event) => {
  let target = event.target
  if (target.nodeName === 'LI') {
    console.log(target.innerHTML)
  }
}

// bad
document.querySelectorAll('li').forEach((e) => {
  e.onclick = function() {
    console.log(this.innerHTML)
  }
}) 
```

## 2. 如何自定义事件

原生提供了3个方法实现自定义事件

- createEvent，设置事件类型，是 html 事件还是 鼠标事件
- initEvent 初始化事件，事件名称，是否允许冒泡，是否阻止自定义事件
- dispatchEvent 触发事件

## 3.一次性插入1000个div，如何优化插入的性能

> **var** fragment = document.createDocumentFragment();
> fragment.appendChild(elem);

## 4.向1000个并排的div元素中，插入一个平级的div元素，如何优化插入的性能

1. 先display:none 然后插入 再display:block
2. 赋予key，然后使用virtual-dom，先render，然后diff，最后patch
3. 脱离文档流，用GPU去渲染，开启硬件加速

## 5. 2万小球问题：在浏览器端，用js存储2万个小球的信息，包含小球的大小，位置，颜色等，如何做到对这2万条小球信息进行最优检索和存储

1. 用ArrayBuffer实现极致存储
2. 用bit-map实现大数据筛查
3. 用hash索引实现简单快捷的检索
4. 用IndexedDB实现动态存储扩充浏览器端虚拟容量
5. 用iframe的漏洞实现浏览器端localStorage无限存储，实现2千万小球信息存储

## 6.实现一个节流函数

> // 思路：在规定时间内只触发一次
>
>  function throttle (fn, delay) {  
>
>  // 利用闭包保存时间   
>
> let prev = Date.now()   
>
> ​	return function () {    
>
> ​		let context = this    
>
> ​		let arg = arguments     
>
> ​		let now = Date.now()     
>
> ​		if (now - prev >= delay) {       
>
> ​			fn.apply(context, arg)      
>
>  			prev = Date.now()     
>
> ​		}   
>
> ​	} 
>
> }  
>
> function fn () {   console.log('节流') } 
>
> addEventListener('scroll', throttle(fn, 1000)) 

## 7.实现一个防抖函数

> // 思路:在规定时间内未触发第二次，则执行 
>
> function debounce (fn, delay) {   
>
> ​	// 利用闭包保存定时器  
>
> ​	let timer = null   
>
> ​	return function () {     
>
> ​		let context = this     
>
> ​		let arg = arguments     
>
> ​		// 在规定时间内再次触发会先清除定时器后再重设定时器     	
>
> ​		clearTimeout(timer)     
>
> ​		timer = setTimeout(function () {  fn.apply(context, arg)     }, delay)  
>
> ​	 }
>
>  }  
>
> function fn () {   console.log('防抖') } 
>
> addEventListener('scroll', debounce(fn, 1000)) 