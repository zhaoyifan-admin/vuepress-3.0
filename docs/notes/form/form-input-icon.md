---
title: Icon图标选择器
createTime: 2025/02/06 14:39:56
permalink: /form/form-input-icon/
---

## 基础用法 

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="图标集合参考例子配置`iconList`属性"](../../examples/form/form-input-icon/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-input-icon/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-input-icon/disabled.vue)

:::

## 其他图标库 

```html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<!-- 引入阿里巴巴的图表库iconfont和svg图标后，直接使用图标名即可，记得加前缀 -->
<link rel="stylesheet" href="https://at.alicdn.com/t/font_567566_pwc3oottzol.css">
<script src="//at.alicdn.com/t/font_2621503_zcbiqy2g1i.js"></script>
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-input-icon/default.vue)

:::