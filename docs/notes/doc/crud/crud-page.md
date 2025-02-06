---
title: 分页
createTime: 2024/12/10 11:23:08
permalink: /doc/crud-page/
---

## 页码和条数
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="页码和条数" desc="`currentPage`当前页码，`total`总条数，`pageSize`每页多少条数据"](../../../examples/crud/crud-page/base.vue)

:::

## 设置最大页码按钮数
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="设置最大页码按钮数" desc="`pagerCount`属性默认为7"](../../../examples/crud/crud-page/pagerCount.vue)

:::

## 无背景色的分页
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="无背景色的分页"](../../../examples/crud/crud-page/background.vue)

:::

## 附加功能
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="`layout`属性中的每一项都是附加功能，可以自行操作"](../../../examples/crud/crud-page/layout.vue)

:::

## 综合用法
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="首次加载调用`on-load`方法加载数据，返回`page`分页对象信息,赋值`page`的`total`总条数即可,如果`total`为0的话，或者`simplePage`为true只有1页的时候，分页选择器会隐藏"](../../../examples/crud/crud-page/crud.vue)

:::

## 自定义分页
::: tabs
@tab vue2

@tab:active vue3

@[demo vue desc="实际的用法要后台配置，将后台返回值赋值给 page 中的属性， `page`就是分页对象注入，page 对象中的`total`为总页数，`pageSizes`为分页信息，`currentPage`为当前第几页，`pageSize`每一页加载多少条数据，点击页码会调用`current-change`方法回调当前页数，返回当前第几页，点击每页多少条会调`size-change`方法回调"](../../../examples/crud/crud-page/slot.vue)

:::