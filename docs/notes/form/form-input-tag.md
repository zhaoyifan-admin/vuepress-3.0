---
title: InputTag 输标签输入框
createTime: 2025/02/06 11:45:47
permalink: /form/form-tag/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="按 Enter 回车键添加输入内容为标签"](../../examples/form/form-tag/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-tag/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-tag/disabled.vue)

:::

## 可清空

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"](../../examples/form/form-tag/clearable.vue)

:::

## 尺寸

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可通过`size`属性指定输入框的尺寸，还提供了`large`,`small`"](../../examples/form/form-tag/size.vue)

:::

## 输入长度限制

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `showWordLimit` 属性来展示字数统计"](../../examples/form/form-tag/len.vue)

:::

## 拖拽

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`drag`为`true`即可开启拖拽模式"](../../examples/form/form-tag/drag.vue)

:::