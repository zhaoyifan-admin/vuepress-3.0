---
title: Slider滑块
createTime: 2025/02/06 14:52:37
permalink: /form/form-slider/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`slider`"](../../examples/form/form-slider/base.vue)

:::

## 离散值
>选项可以是离散的

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="改变`step`的值可以改变步长，通过设置`showStops`属性可以显示间断点"](../../examples/form/form-slider/step.vue)

:::

## 带有输入框
>通过输入框设置精确数值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`showInput`属性会在右侧显示一个输入框"](../../examples/form/form-slider/showInput.vue)

:::

##  范围选择
>支持选择某一数值范围

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`range`即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值"](../../examples/form/form-slider/range.vue)

:::

##  竖向模式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`vertical`可使 Slider 变成竖向模式，此时必须设置高度`height`属性"](../../examples/form/form-slider/vertical.vue)

:::

##  展示标记

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置`marks`属性可以展示标记"](../../examples/form/form-slider/marks.vue)

:::