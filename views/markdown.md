# Markdown

----
用创造者的话说,Markdown是一种基于纯文本电子邮件的文本格式语法。 [Asciphx][]:

> 其思想是，降价格式的文档应可以按原样以纯文本形式发布，而不会看起来像是用标签或格式说明进行了标记.例如使用[Asciphx][]\[\]，带[]只是为了更好识别，也可以这样[Asciphx]

[Asciphx]: http://www.91huanwei.com/
## 语法指南
### 斜体 与 粗体
```
*Emphasize*    **strong**
_Emphasize_    __strong__
```

**快捷键** 或 _快捷键_

- Add/remove bold:

  ⌘-B for Mac / Ctrl-B for Windows and Linux

- Add/remove italic:

  ⌘-I for Mac / Ctrl-I for windows and Linux

### 链接

内联链接:

<http://url.com>
[link text](http://url.com/)

引用链接:

[link text][id]
[id]: http://url.com "title"
**快捷键**

- Add link:

  ⌘-K for Mac / Ctrl-K for Windows and Linux


### 图像

内联图像:

```
![alt text](http://path/to/img.jpg "title")
![alt text](http://path/to/img.jpg)
```

引用图像:

```
![alt text][id]
[id]: http://path/to/img.jpg "title"
```

**快捷键**

- Add image:

  ⌥-⌘-I for Mac / Alt-Ctrl-I for Windows and Linux


### 报头

Atx-风格的:

```
# h1
## h2
### h3
…
```

关闭#是可选的

```
# h1 #
## h2 ##
…
```


### Lists

无段落的有序列表:

1. foo
2. bar

带段落的无序列表:

* A list item.
  With multiple paragraphs.
* bar

你可以构筑:
* Abacus
  * anser
* Bubbles
  1. bunk
  2. bupkis
     * bar
  3. burper
* Cunning

**快捷键**

- Add/remove unordered list:

  ⌘-L for Mac / Ctrl-L for Windows and Linux

- Add/remove ordered list:

  ⌥-⌘-L for Mac / Alt-Ctrl-L for Windows and Linux


### 块引号

> Email-style angle brackets
> are used for blockquotes.

> > And, they can be nested.

> #### Headers in blockquotes
> 
> * You can quote a list.
> * Etc.

**快捷键**

- Add/remove blockquote:

  ⌘-’ for Mac / Ctrl-’ for Windows and Linux


### 代码片段

```
`<code>` 跨度由倒勾号分隔.

您可以包含文字背景
如 `` `this` ``.
```

### 代码块
至少缩进4个空格或1个制表符.

```
这是正常段落
    这是代码块
```


### 横向规则

三个或更多的星号破折号.
```
---
* * *
- - - - 
```