---
title: Input 输入框
createTime: 2025/02/06 10:16:04
permalink: /form/form-input/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="当`type`为`input`时可以不写,默认为`input`"](../../examples/form/form-input/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-input/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-input/disabled.vue)

:::

## 可清空

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"](../../examples/form/form-input/clearable.vue)

:::

## 密码框

> 用于密码，通过将 type 属性的值指定为 password
> :::demo 使用`showPassword`属性即可得到一个可切换显示隐藏的密码框
> form/form-input/password
> :::

## 文本域

> 用于文本域，通过将 type 属性的值指定为 textarea,文本域高度可通过 rows 属性控制

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="通过设置`maxRows`和`minRows`，指定最小行数和最大行数,使得文本域的高度能够根据文本内容自动进行调整"](../../examples/form/form-input/textarea.vue)

:::

## 尺寸

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="可通过`size`属性指定输入框的尺寸，还提供了`large`,`small`"](../../examples/form/form-input/size.vue)

:::

## 复合型输入框

> 带有图标标记输入类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="可以通过 `prefixIcon` 和 `suffixIcon`以及`prepend`和`append`属性在 `input` 组件首部和尾部增加显示图标"](../../examples/form/form-input/icon.vue)

:::

## 输入长度限制

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `showWordLimit` 属性来展示字数统计"](../../examples/form/form-input/len.vue)

:::