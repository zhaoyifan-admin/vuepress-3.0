---
title: Checkbox多选框
createTime: 2025/02/06 13:23:40
permalink: /form/form-checkbox/
---

## 基础用法
>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过将`type`属性的值指定为`checkbox`,同时配置`dicData`为字典值"](../../examples/form/form-checkbox/base.vue)

:::

## 网络字典
>更多用法参考[表单数据字典](/form/form-dic)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`dicUrl`指定后台接口的地址"](../../examples/form/form-checkbox/dic.vue)

:::

## 默认值

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`value`属性可以提供一个初始化的默认值"](../../examples/form/form-checkbox/value.vue)

:::

## 禁用状态

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="通过`disabled`属性指定是否禁用"](../../examples/form/form-checkbox/disabled.vue)

:::

## 禁用选项

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="返回的字典中数据配置`disabled`属性指定是否禁用"](../../examples/form/form-checkbox/disabled-item.vue)

:::

## 全选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`all`为`true`"](../../examples/form/form-checkbox/all.vue)

:::

## 数量限制

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="使用`min`和`max`属性能够限制可以被勾选的项目的数量"](../../examples/form/form-checkbox/max.vue)

:::

## 按钮样式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`button`为`true`"](../../examples/form/form-checkbox/button.vue)

:::

## 空心样式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置`border`为`true`"](../../examples/form/form-checkbox/border.vue)

:::