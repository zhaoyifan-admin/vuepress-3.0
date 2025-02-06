---
title: Mention 提及框
createTime: 2025/02/06 14:49:37
permalink: /form/form-mention/
---

## 基础用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="用于在输入中提及某人或某事,同时配置`dicData`为字典值"](../../examples/form/form-mention/base.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-mention/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-mention/disabled.vue)

:::

## 可清空

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`clearable`属性即可得到一个可清空的输入框,默认为`true`"](../../examples/form/form-mention/clearable.vue)

:::

## 复合型输入框

> 带有图标标记输入类型

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="可以通过 `prefixIcon` 和 `suffixIcon`以及`prepend`和`append`属性在 `input` 组件首部和尾部增加显示图标"](../../examples/form/form-mention/icon.vue)

:::

## 字典属性

> 指定标签文本和值，默认为 label 和 value

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`属性来指定标签文本和值，默认为`label`和`value`"](../../examples/form/form-mention/dic-local.vue)

:::

## 网络字典

> 更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址"](../../examples/form/form-mention/dic-net.vue)

:::

## 自定义模板

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`props`名称加`Type`卡槽开启即可自定义下拉框的内容,`typeformat`配置回显的内容,但是你提交的值还是`value`并不会改变"](../../examples/form/form-mention/slot.vue)

:::

## 远程搜索

> 当你的下拉框数据量很大的时候，你可以启动远程搜索

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`remote`为`true`即可开启远程搜索，其中`dicUrl`中`'{{key}}'`为用户输入的关键字"](../../examples/form/form-mention/remote.vue)

:::