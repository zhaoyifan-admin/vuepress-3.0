---
title: Dynamic子表单
createTime: 2025/02/06 14:24:44
permalink: /form/form-dynamic/
---

:::tip
这里子子表单只能用于简单的场景，复杂的场景可以利用[Form自定义](/form/form-slot/)嵌入一个[Crud行编辑](/crud/crud-cell)
::::

## 表格用法 
>内部组件为crud组件，大部分属性参考Crud文档

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dynamic`的`children`字段即可"](../../examples/form/form-dynamic/table.vue)

:::

## 表单用法 
>内部组件为form组件，大部分属性参考Form文档

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`type`为`form`类型即可转化为表单格式，配置`index`为`false`即可隐藏序号"](../../examples/form/form-dynamic/form.vue)

:::

## 父子联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../examples/form/form-dynamic/parent.vue)

:::