## 动态进度条

### demo1

这里用到：

* `document.onreadystatechange`:当页面加载状态改变的时候执行这个方法.
* `document.readyState`:

本例中，使用`console.log(document.readyState);` 在控制台先后打印出`interactive`,`complete`

当`document.readyState == "complete"`时，就将loading动画隐藏掉。

### demo2

在demo1的基础上，使用css3制作进度条

网站推荐：[css3兼容代码自动获得](http://autoprefixer.github.io/)

### demo3

固定在头部的进度条(此方法较麻烦)

### demo4

**推荐使用，** 但是size()方法有问题，待处理