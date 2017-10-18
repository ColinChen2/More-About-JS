## css 的发展
1. CSS
2. SASS
3. BEM
4. CSS Modules
5. styled components

## CSS 的进化
1. css pre-language, extend css => SASS
2. pure css great rules to use => BEM
3. module and component => CSS Modules
4. write everything in js, write css in js => styled components

## CSS 的问题
#### css selector and specificity
* id selector
* class selector
* element selector

#### 主要问题
1. 结构松散，没有统一标准，容易乱
2. 全局作用域，难以控制，只能不断覆盖
3. 选择器层级嵌套，优先级计算复杂，模块之间容易相互影响

### 解决方案

### [SASS](http://sass-lang.com/guide)
* variables
* nesting
* inheritance - extend
* operators
* mixins

优点：
1. 有效的组织了代码，结构清晰
2. 拓展语言的表达能力，简化开发

缺点：
1. 多层嵌套，选择器效率下降
2. 多层嵌套，模块之间覆盖更加复杂

### [BEM](http://getbem.com/introduction/)
* smacss: scalable and modular architectur for css
* BEM: block__element--modifier

we can use smacss and BEM at the same time.
just use smacss:
1. Base
  * normalize
  * iconfont
  * animation
2. Module
3. State

优点：
1. 在类名上定义标准，简单有效，直接避免了模块的相互影响
2. 统一了标准，容易维护

缺点：
1. 类名太长，冗余，增加工作负担

结合SASS可以减轻负担，如：

``` css
// Block
.scenery {
   //Elements
  &__sky {
    fill: screen;
  }
  &__ground {
    float: bottom;
  }
  &__people {
    float: center;
  }
}
```

### [CSS Modular](https://github.com/css-modules/css-modules)
implement: webpack css-loader

sometime like: a clever way of automating BEM

### [Styled Components](https://www.styled-components.com/docs/basics#getting-started)
used in react-native mostly.
