---
title: 行编辑
createTime: 2025/02/06 09:23:08
permalink: /doc/crud-cell/
---

可以批量对表格编辑和新增等操作

:::tip
如果进行其它操作可以参考[Form组件事件](/form/form-event.html)进行联动
::::

## 普通用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="配置数据中`$cellEdit`为`true`即可开启首次编辑`addRowBtn`为行新增按钮，`cellBtn`设置为true则开启行编辑按钮，在配置中将编辑的字段设置`cell`为`true`,增删改查方法和`crud`组件使用一致，`rowKey`为主键的key，如果数据中存在主键，数据才会保存在表格中"](../../../examples/crud/crud-cell/base.vue)

:::

## 内容自定义

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="和普通的卡槽用法一致，可以参考[自定义列](/crud/crud-column.html#自定义列)和[自定义表单](/crud/crud-form.html#自定义表单)"](../../../examples/crud/crud-cell/slot.vue)

:::


## 按钮自定义

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="卡槽中的`row.$cellEdit`来判断是他的当前状态,`cancelBtn`为取消按钮)"](../../../examples/crud/crud-cell/button.vue)

:::

## 多级联动

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-cell/cascader.vue)

:::


## 行单击编辑

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="调用行单击事件，在调用内部`rowEdit`方法即可"](../../../examples/crud/crud-cell/click.vue)

:::

## 行双击编辑

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="调用行双击事件，在调用内部`rowEdit`方法即可"](../../../examples/crud/crud-cell/dbClick.vue)

:::


