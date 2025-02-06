---
title: 表头配置
createTime: 2025/2/5 13:46:37
permalink: /doc/crud-head/
---

## 固定表头

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="设置`height`时当表格的高度超过设定值，就会出现滚动条，从而达到固定表头的效果"](../../../examples/crud/crud-head/height.vue)

:::


## 隐藏表头

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="设`showHeader`属性为`false`即可隐藏表头"](../../../examples/crud/crud-head/showHeader.vue)

:::

## 多级表头
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="只要在配置中添加children层级嵌套即可"](../../../examples/crud/crud-head/children.vue)

:::

## 自定义表头样式
```css
.warning-row{
  background-color: #F56C6C !important;
  color:#fff;
}
.success-row{
  background-color: #67C23A !important;
  color:#fff;
}
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="可以通过指定 组件的 `header-class-name`"](../../../examples/crud/crud-head/row-class-name.vue)

:::

## 表头单元格样式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="对开开放了`header-cell-style`和`header-row-style`方法"](../../../examples/crud/crud-head/cell-style.vue)

:::

## 自定义列表头
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="在卡槽中指定列的`prop`加上`-header`作为卡槽的名称即可自定义"](../../../examples/crud/crud-head/headerslot.vue)

:::

## 自定义菜单栏左边
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="卡槽为`menu-left`为表格菜单左边的位置"](../../../examples/crud/crud-head/menu-left.vue)

:::

## 自定义菜单栏右边

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="卡槽为`menu-right`为表格菜单右边的位置"](../../../examples/crud/crud-head/menu-right.vue)

:::