## 排序
排序的实现算法很多，使用的数据结构也很多。但今天我们不做教课书式全面的铺开。

声明：JS并不是特别适合做底层的算法实现，这些算法往往用C，C++这类更接近计算机的编程语言。但这不妨碍我们理解数据结构和算法。

### 问题

请问你用过浏览器的内置方法sort？

sort是在哪个对象的原型链上？

在定义compare方法时，浏览器是怎么实现这个sort的呢？

### 调查
现在我们就去看看webkit是怎么实现的。
[webkit-array-sort](https://trac.webkit.org/browser/trunk/Source/JavaScriptCore/runtime/ArrayPrototype.cpp?rev=138530#L647)

#### 源码解读
```
I've just had a look at the WebKit (Chrome, Safari …) source. Depending on the type of array, different sort methods are used:

1. Numeric arrays (or arrays of primitive type) are sorted using the C++ standard library function std::qsort which implements some variation of quicksort (usually introsort).
2. Contiguous arrays of non-numeric type are stringified and sorted using mergesort, if available (to obtain a stable sorting) or qsort if no merge sort is available.
3. For other types (non-contiguous arrays and presumably for associative arrays) WebKit uses either selection sort (which they call “min” sort) or,
in some cases, it sorts via an AVL tree. Unfortunately, the documentation here is rather vague so you’d have to trace the code paths to actually see for which types which sort method is used.

And then there are gems like this comment:

// FIXME: Since we sort by string value, a fast algorithm might be to use a
// radix sort. That would be O(N) rather than O(N log N).
– Let’s just hope that whoever actually “fixes” this has a better understanding of asymptotic runtime than the writer of this comment, and realises that radix sort has a slightly more complex runtime description than simply O(N).
```

### 整理
这里提到的有：快排，归并，选择，基数。

代码注释里还提及：冒泡，堆排序，插入。

我们去Wiki里查一下，完整的排序算法分类：
[排序算法](https://zh.wikipedia.org/wiki/%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#%E4%B8%8D%E7%A9%A9%E5%AE%9A%E7%9A%84%E6%8E%92%E5%BA%8F)

结合上面的问题，从中挑经典的 **八种排序**：

1. [交换排序](doc/sort-exchange.md)：冒泡排序(简单)，快速排序
2. [选择排序](doc/sort-selection.md)：选择排序（简单），堆排序
3. [插入排序](doc/sort-insertion.md)：插入排序（简单），希尔排序
4. [归并排序](doc/sort-merge.md)：归并排序
5. [分布排序](doc/sort-distribution.md)：基数排序

### 参考链接
1. [wiki](https://en.wikipedia.org/wiki/Sorting_algorithm)
2. [stackoverflow](https://stackoverflow.com/questions/234683/javascript-array-sort-implementation)