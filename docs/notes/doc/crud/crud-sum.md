---
title: 统计合计
createTime: 2025/02/06 09:23:10
permalink: /doc/crud-sum/
---

配置相应的属性后，在表格末尾即可达到统计合计功能

## 普通用法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`showSummary`设置为`true`即可开启统计合计功能，`sumColumnList`属性配置需要计算的表格列配置，其中`name`为列的`prop`值，`type`为需要计算的类型，目前支持（合计 / 平均 / 统计）三个大功能，后期将会加强表格的计算能力"](../../../examples/crud/crud-sum/base.vue)

:::

## 自定义计算

::: tabs
@tab vue2

@tab:active vue3

@[demo vue](../../../examples/crud/crud-sum/slot.vue)

:::
