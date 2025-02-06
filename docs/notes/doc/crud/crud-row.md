---
title: 表格行配置项
createTime: 2025/2/5 13:53:08
permalink: /doc/crud-row/
---
## 边框

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="默认情况下，是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用"](../../../examples/crud/crud-row/border.vue)

:::

## 条纹

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="默认情况下，是不具有行彩色条纹的，如果需要，可以使用`stripe`属性，它接受一个`Boolean`，设置为`true`即可启用"](../../../examples/crud/crud-row/stripe.vue)

:::

## 行和单元格样式

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="对开开放了`cell-style`和`row-style`方法"](../../../examples/crud/crud-row/cell-style.vue)

:::

## 自定义行样式

```css
.warning-row {
  background-color: #f56c6c !important;
  color: #fff;
}
.success-row {
  background-color: #67c23a !important;
  color: #fff;
}
.warning-row.hover-row td,
.success-row.hover-row td {
  background-color: initial !important;
}
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="可以通过指定 组件的 `row-class-name` 属性来为 crud 中的某一行添加 class，表明该行处于某种状态,返回当前行的`row`数据和行的序号`index`"](../../../examples/crud/crud-row/row-class-name.vue)

:::

## 行多选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="设`selection`属性为`true`即可；勾选的同时会回调`selectionChange`方法返回当前选中的数据,`toggleRowSelection`方法设置行勾选,`toggleAllSelection`方法设置全部勾选"](../../../examples/crud/crud-row/selection.vue)

:::

## 禁止某个项选择

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`selectable`函数决定该行是否可以勾选"](../../../examples/crud/crud-row/selectable.vue)

:::

## 翻页多选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="设置`reserveSelection`为`true`保留之前的勾选"](../../../examples/crud/crud-row/reserveSelection.vue)

:::

## 多选提示

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="设置`tip`为`false`可以取消表格上方显示的提示，同时支持对应的卡槽自定义"](../../../examples/crud/crud-row/tip.vue)

:::

## 行单选

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="单选一行数据时需要设置`highlightCurrentRow`属性为`true`,回调`current-row-change`方法,同时返回当前行的`row`数据"](../../../examples/crud/crud-row/highlightCurrentRow.vue)

:::

## 行单选(利用卡槽)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="这里利用了列自定义卡槽方式去实现行单选"](../../../examples/crud/crud-row/radio.vue)

:::

## 展开行

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="使用`expand`属性时必须配置`rowKey`属性为你行数据的主键，不能重复, `defaultExpandAll`属性默认展开全部,`expandRowKeys`为展开指定`rowKey`主键的数组，同时你也可以调用`toggleRowExpansion`方法传入你要展开的`row`"](../../../examples/crud/crud-row/expand.vue)

:::

## 展开行(手风琴模式)

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`expand-change`配置`expandRowKeys`去使用"](../../../examples/crud/crud-row/expand-change.vue)

:::

## 行单击方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="单击一行数据时回调`row-click`方法,同时返回当前行的`row`数据,`event`当前的操作对象,`column`当前列的属性"](../../../examples/crud/crud-row/row-click.vue)

:::

## 行双击方法

::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="双击一行数据时回调`row-dblclick`方法,同时返回当前行的`row`数据,`event`当前的操作对象,`column`当前列的属性"](../../../examples/crud/crud-row/row-dblclick.vue)

:::

## 行拖拽排序

```html
<!-- 导入需要的包 （一定要放到index.html中的head标签里） -->
<script src="https://cdn.staticfile.net/Sortable/1.10.0-rc2/Sortable.min.js"></script>
```
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="`rowSort`设置为`true`即可开启拖拽功能，`sortable-change`为拖拽后的回调方法,数据中需要包含`rowKey`主键，默认为`id`"](../../../examples/crud/crud-row/drag.vue)

:::

## 行合并

:::tip
如果数据不确定参考[动态数据行和列合并](/crud/crud-rc.html)
::::
::: tabs
@tab vue2

@tab:active vue3

@[demo vue  desc="通过给传入`spanMethod`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象"](../../../examples/crud/crud-row/spanMethod.vue)

:::
